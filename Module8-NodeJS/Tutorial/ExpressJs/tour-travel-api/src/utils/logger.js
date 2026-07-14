const winston = require("winston");
const path = require("path");
const config = require("../config");

const LOGS_DIR = path.join(__dirname, "..", "..", "logs");

/**
 * Application logger (Winston) — Morgan logs HTTP requests, Winston logs
 * everything else: business events, warnings, errors with stack traces.
 * Levels: error > warn > info > http > debug
 */
const logger = winston.createLogger({
    level: config.logging.level,
    format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: { service: "tour-travel-api" },
    transports: [
        // Errors always go to their own rotated file
        new winston.transports.File({
            filename: path.join(LOGS_DIR, "error.log"),
            level: "error",
            maxsize: 5 * 1024 * 1024,
            maxFiles: 5,
        }),
    ],
});

// All levels to a combined file in production
if (config.isProduction) {
    logger.add(
        new winston.transports.File({
            filename: path.join(LOGS_DIR, "combined.log"),
            maxsize: 5 * 1024 * 1024,
            maxFiles: 10,
        })
    );
} else {
    // Human-friendly console output in development
    logger.add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.printf(({ timestamp, level, message, stack, ...meta }) => {
                    delete meta.service;
                    const extra = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : "";
                    return `${timestamp} [${level}]: ${stack || message}${extra}`;
                })
            ),
        })
    );
}

module.exports = logger;
