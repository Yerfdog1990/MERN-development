const { Router } = require("express");
const controller = require("../controllers/tour.controller");
const validators = require("../validators/tour.validators");
const { listQuery } = require("../validators/query.validators");
const validate = require("../middleware/validate");
const { upload } = require("../middleware/upload");
const { protect, restrictTo } = require("../middleware/auth");
const bookingRouter = require("./booking.routes");
const adminOnly = [protect, restrictTo("admin")];

const router = Router();

// Nested resource: /tours/:tourId/bookings
router.use("/:tourId/bookings", bookingRouter);

// Static route BEFORE the dynamic /:id route
router.get("/stats", controller.getTourStats);

router
    .route("/")
    .get(listQuery, validate, controller.listTours)
    .post(...adminOnly, validators.createTour, validate, controller.createTour);

router
    .route("/:id")
    .get(validators.idParam, validate, controller.getTour)
    .patch(...adminOnly, validators.updateTour, validate, controller.updateTour)
    .delete(...adminOnly, validators.idParam, validate, controller.deleteTour);

// Image upload: validate the id first, then let multer parse the multipart body
router.post(
    "/:id/image",
    ...adminOnly,
    validators.idParam,
    validate,
    upload.single("image"),
    controller.uploadTourImage
);

module.exports = router;
