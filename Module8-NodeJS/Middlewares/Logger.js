import fs from "fs";
import express from "express";

const app = express();
const PORT = 8006;

// Parse JSON request bodies
app.use(express.json());

// pseudo database
let username = "bekas";
let password = "bekas123";

// Middleware 1 — emptiness check only
app.use((req, res, next) => {
    if (req.body.username === "") {
        res.end("Please enter valid username first"); // end the cycle
    } else {
        next();
    }
});

// Middleware 2 — credential match only (no need to re-check emptiness)
app.use((req, res, next) => {
    if (req.body.username === username && req.body.password === password) {
        next();
    } else {
        res.end("Invalid credentials");
    }
});


// Middleware 3 — logger / ledger
app.use((req, res, next) => {
    const log = `${req.body.username} from ip address ${req.ip} was accessing ${req.url} at ${Date.now()}\n`;

    // appendFile, NOT writeFile — writeFile overwrites the previous entries
    fs.appendFile("log.txt", log, (err) => {
        next(); // forward regardless
    });
});

// login
app.post("/login", (req, res) => {
    res.end("Login successful");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});