const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const config = require("./config");
const apiRouter = require("./routes");
const apiLimiter = require("./middleware/rateLimiter");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Express 5 defaults to the "simple" query parser; switch to "extended"
// so operator syntax like ?price[lte]=2000 parses into nested objects.
app.set("query parser", "extended");

// --- Global middleware (order matters) ---
app.use(helmet());                                   // security headers
app.use(cors({ origin: config.corsOrigin }));        // cross-origin policy

// HTTP request logging: concise+colored in dev, Apache-style to file in prod
if (config.isProduction) {
    const logsDir = path.join(__dirname, "..", "logs");
    fs.mkdirSync(logsDir, { recursive: true });
    const accessLogStream = fs.createWriteStream(path.join(logsDir, "access.log"), { flags: "a" });
    app.use(morgan("combined", { stream: accessLogStream }));
} else {
    app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));            // body parsing w/ size cap

// --- Static serving of uploaded tour images ---
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// --- Routes ---
app.use(config.apiPrefix, apiLimiter, apiRouter);

// --- 404 + centralized error handling (always last) ---
app.use(notFound);
app.use(errorHandler);

module.exports = app;
