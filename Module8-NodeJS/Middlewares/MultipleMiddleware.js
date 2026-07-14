import express from "express";

const app = express();
const PORT = 8003;

//Stacking multiple middleware
app.use((req, res, next) => {
    console.log("Middleware 1 called");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2 called");
    next(); // remove this → orphan again: "1 called", "2 called", but no "Hi"
});

app.get("/multiple-middleware", (req, res) =>{
    res.end("Hi from multiple middleware");
});

app.listen(PORT, () => {
    console.log("Server is running");
});