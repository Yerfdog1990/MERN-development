/**
 * Morgan Middleware Demo - HTTP Request Logger
 * 
 * Morgan logs HTTP request details to the console.
 * It replaces manual logging middleware and provides various log formats.
 * 
 * Install: npm install morgan
 */

import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());

// Option 1: "dev" format - Concise, colored output for development
// Logs: method, URL, status code, response time, response size
// Example output: POST /login 200 12.345 ms - 25
// app.use(morgan("dev"));

// Option 2: "tiny" format - Minimal output
// Logs: method, URL, status code, response time
// Example output: GET / 200 2.534 ms

// app.use(morgan("tiny"));


// Option 3: "combined" format - Apache-style logging (most detailed)
// Logs: IP, date, method, URL, HTTP version, status, referrer, user-agent
// Example output: ::1 - - [12/Jul/2026:06:53:00 +0000] "GET / HTTP/1.1" 200 123 "-" "Mozilla/5.0..."

// app.use(morgan("combined"));


// Option 4: "common" format - Standard Apache common log format
// Logs: IP, date, method, URL, status, response size
/*
app.use(morgan("common"));
*/

// Option 5: Custom token and format
// You can add custom tokens to log additional information
/*
morgan.token("custom-date", () => new Date().toISOString());
app.use(morgan(":custom-date :method :url :status :res[content-length] - :response-time ms"));
*/

// Option 6: Write logs to a file instead of console

import fs from "fs";
import path from "path";

// Create a write stream for logs file
const logDirectory = path.join(import.meta.dirname, "logs");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" } // Append mode
);

app.use(morgan("combined", { stream: accessLogStream }));


// Sample routes to test logging
app.get("/", (req, res) => {
  res.json({ message: "Morgan is logging your requests!" });
});

app.get("/api/data", (req, res) => {
  // Simulate some processing time
  setTimeout(() => {
    res.json({ data: "Data endpoint with simulated delay" });
  }, 100);
});

app.post("/api/login", (req, res) => {
  res.json({ message: "Login successful" });
});

app.get("/api/error", (req, res) => {
  res.status(500).json({ error: "Simulated error" });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Morgan demo server running on http://localhost:${PORT}`);
  console.log("HTTP requests are now being logged to the console");
  console.log("Try making requests to see the logs in action!");
});
