const { query } = require("express-validator");

/**
 * Shared validation for list-endpoint query params (notes 02: validate
 * params and query too, not just the body).
 */
const listQuery = [
    query("page").optional().isInt({ min: 1 })
        .withMessage("page must be a positive integer"),
    query("limit").optional().isInt({ min: 1, max: 100 })
        .withMessage("limit must be an integer between 1 and 100"),
    query("sort").optional().isString().trim().notEmpty()
        .withMessage("sort must be a comma-separated list of fields"),
    query("fields").optional().isString().trim().notEmpty()
        .withMessage("fields must be a comma-separated list of fields"),
];

module.exports = { listQuery };
