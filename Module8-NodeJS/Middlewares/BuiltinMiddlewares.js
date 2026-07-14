import express from "express";

const app = express();
const PORT = 8004;

app.use(express.json());                          // parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // parse form-urlencoded bodies

app.post("/login", (req, res) => {
    console.log(req.body); // undefined — no one parsed the body!
    res.end("Login done");
});

app.listen(PORT, () => {
    console.log("Server is running");
});