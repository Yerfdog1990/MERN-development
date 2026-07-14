require("dotenv").config();

const config = {
    env: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT) || 3000,
    apiPrefix: process.env.API_PREFIX || "/api/v1",
    corsOrigin: process.env.CORS_ORIGIN || "*",
    rateLimit: {
        windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
        max: Number(process.env.RATE_LIMIT_MAX) || 100,
    },
    logging: {
        level:
            process.env.LOG_LEVEL ||
            (process.env.NODE_ENV === "production" ? "info" : "debug"),
    },
    uploads: {
        maxFileSize: Number(process.env.MAX_FILE_SIZE_BYTES) || 5 * 1024 * 1024, // 5 MB
    },
    jwt: {
        secret: process.env.JWT_SECRET || "dev-only-change-me-in-production",
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    },
    email: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
        from: process.env.EMAIL_FROM || '"Tour & Travel" <noreply@tourtravel.example>',
    },
    isProduction: process.env.NODE_ENV === "production",
};

module.exports = config;
