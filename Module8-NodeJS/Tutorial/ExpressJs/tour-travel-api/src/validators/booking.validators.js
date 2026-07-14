const { body, param } = require("express-validator");

const idParam = [
    param("id").isUUID().withMessage("id must be a valid UUID"),
];

const createBooking = [
    // tourId comes from the body OR from the nested route param
    body("tourId").if((value, { req }) => !req.params.tourId)
        .isUUID().withMessage("tourId must be a valid UUID"),
    param("tourId").optional().isUUID().withMessage("tourId must be a valid UUID"),
    body("customerName").isString().trim().isLength({ min: 2, max: 100 })
        .withMessage("customerName is required (2-100 characters)"),
    body("customerEmail").isEmail().normalizeEmail()
        .withMessage("customerEmail must be a valid email"),
    body("participants").isInt({ min: 1, max: 50 })
        .withMessage("participants must be an integer between 1 and 50"),
    body("startDate").isISO8601()
        .withMessage("startDate must be an ISO 8601 date (YYYY-MM-DD)"),
];

module.exports = { idParam, createBooking };
