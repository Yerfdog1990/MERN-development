const app = require("./app");
const config = require("./config");
const logger = require("./utils/logger");

const server = app.listen(config.port, () => {
    logger.info(
        `Tour & Travel API running in ${config.env} mode on http://localhost:${config.port}${config.apiPrefix}`
    );
});

// --- Graceful shutdown & crash safety ---
process.on("unhandledRejection", (err) => {
    logger.error("UNHANDLED REJECTION — shutting down", { message: err.message, stack: err.stack });
    server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
    logger.error("UNCAUGHT EXCEPTION — shutting down", { message: err.message, stack: err.stack });
    process.exit(1);
});

process.on("SIGTERM", () => {
    logger.info("SIGTERM received — closing server gracefully");
    server.close(() => logger.info("Process terminated"));
});
