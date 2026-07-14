/**
 * Operational error with an HTTP status code.
 * "Operational" errors are expected failures (bad input, missing resource)
 * as opposed to programmer bugs — the global error handler uses this flag
 * to decide how much detail is safe to send to the client.
 */
class AppError extends Error {
    constructor(message, statusCode = 500, details = undefined) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
