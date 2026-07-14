const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");

/**
 * Runs after express-validator chains: collects violations and
 * hands them to the global error handler as a single 422.
 */
function validate(req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    const details = errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
    }));
    next(new AppError("Validation failed", 422, details));
}

module.exports = validate;
