const { body, param } = require("express-validator");

const password = (field = "password") =>
    body(field)
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
        .matches(/\d/).withMessage("Password must contain a number")
        .matches(/[A-Z]/).withMessage("Password must contain an uppercase letter");

const register = [
    body("name").isString().trim().isLength({ min: 2, max: 100 })
        .withMessage("name is required (2-100 characters)"),
    body("email").isEmail().withMessage("valid email is required").normalizeEmail(),
    password(),
];

const login = [
    body("email").isEmail().withMessage("valid email is required").normalizeEmail(),
    body("password").notEmpty().withMessage("password is required"),
];

const updateMe = [
    body("name").isString().trim().isLength({ min: 2, max: 100 })
        .withMessage("name is required (2-100 characters)"),
];

const updatePassword = [
    body("currentPassword").notEmpty().withMessage("currentPassword is required"),
    password("newPassword"),
];

const setRole = [
    param("id").isUUID().withMessage("id must be a valid UUID"),
    body("role").isIn(["user", "admin"]).withMessage("role must be user or admin"),
];

const setActive = [
    param("id").isUUID().withMessage("id must be a valid UUID"),
    body("active").isBoolean().withMessage("active must be a boolean"),
];

module.exports = { register, login, updateMe, updatePassword, setRole, setActive };
