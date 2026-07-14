// middleware.js
import express from "express";

const app = express();
const PORT = 8001;

// 1. Basic server
app.get("/basic-server", (req, res) => {
    res.end("Hi from basic server"); // public route — no check at all
});

app.listen(PORT, () => {
    console.log("Server is running");
});
