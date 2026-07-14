const JsonStore = require("../repositories/JsonStore");
const AppError = require("../utils/AppError");
const logger = require("../utils/logger");
const { buildListResult } = require("../utils/apiFeatures");
const tourService = require("./tour.service");
const { sendBookingConfirmation } = require("./email.service");

const store = new JsonStore("bookings.json");

async function listBookings(query, tourId = undefined) {
    let bookings = await store.find();
    if (tourId) bookings = bookings.filter((b) => b.tourId === tourId);
    return buildListResult(bookings, query);
}

/** Bookings belonging to the logged-in user (by userId or matching email). */
async function listMyBookings(user, query) {
    const bookings = (await store.find()).filter(
        (b) => b.userId === user.id || b.customerEmail.toLowerCase() === user.email.toLowerCase()
    );
    return buildListResult(bookings, query);
}

async function getBooking(id) {
    const booking = await store.findById(id);
    if (!booking) throw new AppError(`No booking found with id ${id}`, 404);
    return booking;
}

async function createBooking(data) {
    // Referential integrity: the tour must exist (throws 404 otherwise)
    const tour = await tourService.getTour(data.tourId);

    // The start date must be one the tour actually offers
    if (!tour.startDates.includes(data.startDate)) {
        throw new AppError(
            `Tour "${tour.name}" has no departure on ${data.startDate}. Available dates: ${tour.startDates.join(", ")}`,
            422
        );
    }

    // Capacity check for that departure
    const existing = await store.find();
    const seatsTaken = existing
        .filter((b) => b.tourId === data.tourId && b.startDate === data.startDate && b.status === "confirmed")
        .reduce((sum, b) => sum + b.participants, 0);

    if (seatsTaken + data.participants > tour.maxGroupSize) {
        throw new AppError(
            `Not enough spots on ${data.startDate}: ${tour.maxGroupSize - seatsTaken} left, ${data.participants} requested`,
            409
        );
    }

    const booking = await store.create({
        ...data,
        totalPrice: tour.price * data.participants,
        currency: tour.currency,
        status: "confirmed",
    });

    logger.info("Booking created", { bookingId: booking.id, tourId: tour.id, participants: booking.participants });

    // Fire-and-forget: never block or fail the booking on email problems
    sendBookingConfirmation({ booking, tour });

    return booking;
}

async function cancelBooking(id, user) {
    const booking = await getBooking(id);
    const isOwner =
        booking.userId === user.id ||
        booking.customerEmail.toLowerCase() === user.email.toLowerCase();
    if (user.role !== "admin" && !isOwner) {
        throw new AppError("You can only cancel your own bookings", 403);
    }
    if (booking.status === "cancelled") {
        throw new AppError("Booking is already cancelled", 409);
    }
    return store.update(id, { status: "cancelled" });
}

/** Aggregate figures for the admin dashboard. */
async function getBookingStats() {
    const bookings = await store.find();
    const confirmed = bookings.filter((b) => b.status === "confirmed");
    const byMonth = {};
    for (const b of confirmed) {
        const month = b.createdAt.slice(0, 7); // YYYY-MM
        byMonth[month] = byMonth[month] || { month, bookings: 0, revenue: 0 };
        byMonth[month].bookings += 1;
        byMonth[month].revenue += b.totalPrice;
    }
    return {
        totalBookings: bookings.length,
        confirmed: confirmed.length,
        cancelled: bookings.length - confirmed.length,
        totalRevenue: confirmed.reduce((s, b) => s + b.totalPrice, 0),
        totalTravellers: confirmed.reduce((s, b) => s + b.participants, 0),
        byMonth: Object.values(byMonth).sort((a, b) => a.month.localeCompare(b.month)),
    };
}

module.exports = { listBookings, listMyBookings, getBooking, createBooking, cancelBooking, getBookingStats };
