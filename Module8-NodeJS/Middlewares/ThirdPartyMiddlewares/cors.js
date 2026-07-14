/**
 * CORS (Cross-Origin Resource Sharing) Middleware Demo
 * 
 * CORS controls which origins (domains/ports) can access your API.
 * Frontend on origin A calling backend on origin B triggers a CORS preflight check.
 * 
 * Install: npm install cors
 */

import express from "express";
import cors from "cors";
import ApiError from "../utils/ApiError.js";

const app = express();
app.use(express.json());

// Option 1: Allow ALL origins (useful for development, NOT recommended for production)
// This sets Access-Control-Allow-Origin: *
app.use(cors());

// Option 2: Restrict to specific trusted origin(s)
// Uncomment below to restrict access to only your frontend
/*
app.use(cors({
  origin: "http://localhost:5173", // Only allow this specific frontend domain
}));
*/

// Option 3: Allow multiple specific origins
/*
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-frontend.com",
  "https://staging.your-frontend.com",
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true); // Origin is allowed
    } else {
      callback(new Error("Not allowed by CORS")); // Origin is blocked
    }
  },
}));
*/

// Option 4: More flexible CORS configuration
/*
app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend.com"],
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies and authentication headers
  maxAge: 86400, // Cache preflight response for 24 hours (in seconds)
}));
*/

// Sample routes to demonstrate CORS
app.get("/", (req, res) => {
  res.json({
    message: "CORS is configured!",
    info: "This API can be accessed from allowed origins",
  });
});

app.get("/api/data", (req, res) => {
  res.json({ data: "Public data accessible via CORS" });
});

const username = "Yerf";
const password = "Yerf123";
app.post("/api/login", (req, res) => {
  if (req.body.username === username && req.body.password === password) {
    return res.json({ message: "Login endpoint - POST request allowed" });
  }

  // For invalid credentials return a 401 response.
  return res.status(401).json({ error: "Invalid credentials" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`CORS demo server running on http://localhost:${PORT}`);
  console.log("CORS policy is now active");
});
