const { Router } = require("express");
const tourRouter = require("./tour.routes");
const bookingRouter = require("./booking.routes");
const authRouter = require("./auth.routes");
const userRouter = require("./user.routes");

const router = Router();

router.get("/health", (req, res) => {
    res.json({
        status: "success",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/tours", tourRouter);
router.use("/bookings", bookingRouter);

module.exports = router;
