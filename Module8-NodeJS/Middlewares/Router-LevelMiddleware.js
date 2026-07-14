import express from "express";
import ApiError from "./utils/ApiError.js";
const app = express();
app.use(express.json());

const username = 'Yerf';
app.post("/login", (req, res, next) => {
    // perform certain checks first
    if (req.body.username !== username) {
        return next(new ApiError(404, "Wrong username")); // cycle terminated
    }
    next(); // otherwise continue to the next handler
}, (req, res) => {
    res.end("Welcome home");
});

app.listen(8008, () => console.log("Server is running"));