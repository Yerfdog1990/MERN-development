import express from "express";

const app = express();
const PORT = 8002;

// 2. Application-level middleware
app.use((req, res, next) => {
    console.log("Middleware 1 called");
    next();
});

app.get("/application-level-middleware", (req, res) => {
    res.end("Hi from application-level middleware");
});

app.listen(PORT, () => {
    console.log("Server is running");
});