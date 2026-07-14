const multer = require("multer");
const config = require("../config");
const logger = require("../utils/logger");

/**
 * Global error handler — the single place errors become HTTP responses.
 * Must keep all 4 parameters so Express recognises it as error middleware.
 */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    // Malformed JSON body from express.json()
    if (err.type === "entity.parse.failed") {
        err.statusCode = 400;
        err.status = "fail";
        err.message = "Invalid JSON in request body";
        err.isOperational = true;
    }

    // Multer upload errors (file too large, wrong field name, ...)
    if (err instanceof multer.MulterError) {
        err.statusCode = 400;
        err.status = "fail";
        err.isOperational = true;
        if (err.code === "LIMIT_FILE_SIZE") {
            err.message = `File too large. Max ${config.uploads.maxFileSize / (1024 * 1024)}MB allowed`;
        } else if (err.code === "LIMIT_UNEXPECTED_FILE") {
            err.message = `Unexpected upload field "${err.field}". Use the "image" field`;
        } else {
            err.message = `Upload error: ${err.message}`;
        }
    }

    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    if (!err.isOperational) {
        // Programmer/unknown error: log it, hide details from the client in prod
        logger.error("Unexpected error", { message: err.message, stack: err.stack });
    }

    res.status(statusCode).json({
        status,
        message:
            !err.isOperational && config.isProduction
                ? "Something went wrong"
                : err.message,
        ...(err.details && { errors: err.details }),
        ...(!config.isProduction && !err.isOperational && { stack: err.stack }),
    });
}

module.exports = errorHandler;
