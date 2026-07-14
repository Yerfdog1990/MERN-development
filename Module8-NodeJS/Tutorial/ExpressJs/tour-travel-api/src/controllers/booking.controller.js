const bookingService = require("../services/booking.service");

async function listBookings(req, res) {
    // When mounted at /tours/:tourId/bookings, scope to that tour
    const { data, pagination } = await bookingService.listBookings(req.query, req.params.tourId);
    res.json({ status: "success", results: data.length, pagination, data });
}

async function getBooking(req, res) {
    const booking = await bookingService.getBooking(req.params.id);
    res.json({ status: "success", data: booking });
}

async function createBooking(req, res) {
    // Nested route (/tours/:tourId/bookings) supplies tourId via params
    const payload = { ...req.body, tourId: req.params.tourId ?? req.body.tourId };
    // Guest checkout is allowed; logged-in users get the booking linked to them
    if (req.user) payload.userId = req.user.id;
    const booking = await bookingService.createBooking(payload);
    res.status(201).json({ status: "success", data: booking });
}

async function listMyBookings(req, res) {
    const { data, pagination } = await bookingService.listMyBookings(req.user, req.query);
    res.json({ status: "success", results: data.length, pagination, data });
}

async function cancelBooking(req, res) {
    const booking = await bookingService.cancelBooking(req.params.id, req.user);
    res.json({ status: "success", data: booking });
}

async function getBookingStats(req, res) {
    const stats = await bookingService.getBookingStats();
    res.json({ status: "success", data: stats });
}

module.exports = { listBookings, listMyBookings, getBooking, createBooking, cancelBooking, getBookingStats };
