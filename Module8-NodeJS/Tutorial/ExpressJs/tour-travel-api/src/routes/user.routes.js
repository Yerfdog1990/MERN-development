const { Router } = require("express");
const controller = require("../controllers/user.controller");
const validators = require("../validators/auth.validators");
const validate = require("../middleware/validate");
const { protect, restrictTo } = require("../middleware/auth");

const router = Router();

// Everything below requires a valid login
router.use(protect);

router.patch("/me", validators.updateMe, validate, controller.updateMe);
router.patch("/me/password", validators.updatePassword, validate, controller.updatePassword);

// Admin-only user management
router.get("/", restrictTo("admin"), controller.listUsers);
router.patch("/:id/role", restrictTo("admin"), validators.setRole, validate, controller.setRole);
router.patch("/:id/active", restrictTo("admin"), validators.setActive, validate, controller.setActive);

module.exports = router;
