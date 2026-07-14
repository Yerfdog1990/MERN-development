const { body, param } = require("express-validator");

const DIFFICULTIES = ["easy", "medium", "difficult"];

const idParam = [
    param("id").isUUID().withMessage("id must be a valid UUID"),
];

const createTour = [
    body("name").isString().trim().isLength({ min: 3, max: 100 })
        .withMessage("name is required (3-100 characters)"),
    body("description").isString().trim().isLength({ min: 10 })
        .withMessage("description is required (min 10 characters)"),
    body("destination").isString().trim().notEmpty()
        .withMessage("destination is required"),
    body("durationDays").isInt({ min: 1, max: 365 })
        .withMessage("durationDays must be an integer between 1 and 365"),
    body("price").isFloat({ min: 0 })
        .withMessage("price must be a positive number"),
    body("currency").optional().isISO4217()
        .withMessage("currency must be an ISO 4217 code, e.g. USD"),
    body("maxGroupSize").isInt({ min: 1, max: 100 })
        .withMessage("maxGroupSize must be an integer between 1 and 100"),
    body("difficulty").isIn(DIFFICULTIES)
        .withMessage(`difficulty must be one of: ${DIFFICULTIES.join(", ")}`),
    body("startDates").isArray({ min: 1 })
        .withMessage("startDates must be a non-empty array"),
    body("startDates.*").isISO8601()
        .withMessage("each start date must be an ISO 8601 date (YYYY-MM-DD)"),
];

// PATCH: same rules, but every field is optional
const updateTour = [
    ...idParam,
    body("name").optional().isString().trim().isLength({ min: 3, max: 100 }),
    body("description").optional().isString().trim().isLength({ min: 10 }),
    body("destination").optional().isString().trim().notEmpty(),
    body("durationDays").optional().isInt({ min: 1, max: 365 }),
    body("price").optional().isFloat({ min: 0 }),
    body("currency").optional().isISO4217(),
    body("maxGroupSize").optional().isInt({ min: 1, max: 100 }),
    body("difficulty").optional().isIn(DIFFICULTIES),
    body("startDates").optional().isArray({ min: 1 }),
    body("startDates.*").optional().isISO8601(),
];

module.exports = { idParam, createTour, updateTour };
