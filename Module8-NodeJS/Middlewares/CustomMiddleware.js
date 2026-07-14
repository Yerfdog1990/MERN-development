import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

// pretend database
let username = "bekas";
let password = "bekas123";

// custom middleware — sits between request and response
app.use((req, res, next) => {
    if (req.body.username === username && req.body.password === password) {
        console.log("I am done with check, you can go ahead");
        next();
    } else {
        res.end("Invalid credentials");
    }
});

app.post("/login", (req, res) => {
    // serve an actual page instead of plain text
    fs.readFile("home.html", "utf-8", (err, data) => {
        if (err) {
            return res.status(404).json({ message: "Something went wrong" });
        }
        res.send(data);
    });
});

app.listen(8005, () => console.log("Server is running"));