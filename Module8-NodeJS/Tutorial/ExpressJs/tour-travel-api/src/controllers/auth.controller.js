const userService = require("../services/user.service");
const { signToken } = require("../middleware/auth");
const logger = require("../utils/logger");

async function register(req, res) {
    const user = await userService.createUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // role is intentionally NOT taken from the body — no self-service admins
    });
    logger.info("User registered", { userId: user.id, email: user.email });
    res.status(201).json({ status: "success", token: signToken(user), data: user });
}

async function login(req, res) {
    const user = await userService.verifyCredentials(req.body.email, req.body.password);
    logger.info("User logged in", { userId: user.id });
    res.json({ status: "success", token: signToken(user), data: user });
}

async function me(req, res) {
    res.json({ status: "success", data: req.user });
}

module.exports = { register, login, me };
