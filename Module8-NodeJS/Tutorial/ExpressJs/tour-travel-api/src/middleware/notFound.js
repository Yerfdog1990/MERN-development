const AppError = require("../utils/AppError");

/** Catch-all for unmatched routes — forwards a 404 to the error handler. */
function notFound(req, res, next) {
    next(new AppError(`Cannot ${req.method} ${req.originalUrl}`, 404));
}

module.exports = notFound;
