const { Router } = require("express");
const controller = require("../controllers/booking.controller");
const validators = require("../validators/booking.validators");
const { listQuery } = require("../validators/query.validators");
const validate = require("../middleware/validate");
const { protect, optionalAuth, restrictTo } = require("../middleware/auth");

// mergeParams lets this router see :tourId when nested under /tours/:tourId/bookings
const router = Router({ mergeParams: true });

// Static routes BEFORE the dynamic /:id route
router.get("/mine", protect, listQuery, validate, controller.listMyBookings);
router.get("/stats", protect, restrictTo("admin"), controller.getBookingStats);

router
    .route("/")
    // Full booking list is admin-only; users see theirs via /mine
    .get(protect, restrictTo("admin"), listQuery, validate, controller.listBookings)
    // Guest checkout allowed — optionalAuth links the booking when logged in
    .post(optionalAuth, validators.createBooking, validate, controller.createBooking);

router.get("/:id", protect, validators.idParam, validate, controller.getBooking);
router.patch("/:id/cancel", protect, validators.idParam, validate, controller.cancelBooking);

module.exports = router;
