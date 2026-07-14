const jwt = require("jsonwebtoken");
const config = require("../config");
const AppError = require("../utils/AppError");
const userService = require("../services/user.service");

function signToken(user) {
    return jwt.sign({ sub: user.id, role: user.role }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
    });
}

function extractToken(req) {
    const header = req.headers.authorization;
    if (header?.startsWith("Bearer ")) return header.slice(7);
    return null;
}

/** Requires a valid JWT; attaches the (sanitized) user to req.user. */
async function protect(req, res, next) {
    const token = extractToken(req);
    if (!token) throw new AppError("You are not logged in. Please log in to get access", 401);

    let payload;
    try {
        payload = jwt.verify(token, config.jwt.secret);
    } catch {
        throw new AppError("Invalid or expired token. Please log in again", 401);
    }

    const user = await userService.findById(payload.sub);
    if (!user || !user.active) {
        throw new AppError("The account belonging to this token no longer exists", 401);
    }
    req.user = userService.sanitize(user);
    next();
}

/** Like protect, but anonymous requests pass through with req.user = null. */
async function optionalAuth(req, res, next) {
    req.user = null;
    const token = extractToken(req);
    if (token) {
        try {
            const payload = jwt.verify(token, config.jwt.secret);
            const user = await userService.findById(payload.sub);
            if (user?.active) req.user = userService.sanitize(user);
        } catch {
            /* invalid token on an optional route → treat as guest */
        }
    }
    next();
}

/** Role gate — use after protect: restrictTo("admin"). */
function restrictTo(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user?.role)) {
            throw new AppError("You do not have permission to perform this action", 403);
        }
        next();
    };
}

module.exports = { signToken, protect, optionalAuth, restrictTo };
