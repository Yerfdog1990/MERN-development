const { Router } = require("express");
const controller = require("../controllers/auth.controller");
const validators = require("../validators/auth.validators");
const validate = require("../middleware/validate");
const { protect } = require("../middleware/auth");

const router = Router();

router.post("/register", validators.register, validate, controller.register);
router.post("/login", validators.login, validate, controller.login);
router.get("/me", protect, controller.me);

module.exports = router;
