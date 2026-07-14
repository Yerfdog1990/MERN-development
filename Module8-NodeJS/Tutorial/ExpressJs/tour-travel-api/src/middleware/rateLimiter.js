const rateLimit = require("express-rate-limit");
const config = require("../config");

/** Basic abuse protection: N requests per IP per window on /api routes. */
const apiLimiter = rateLimit({
    windowMs: config.rateLimit.windowMs,
    limit: config.rateLimit.max,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: {
        status: "fail",
        message: "Too many requests from this IP, please try again later",
    },
});

module.exports = apiLimiter;
