/**
 * Multer Middleware Demo - File Upload Handler
 * 
 * Multer handles multipart/form-data, which is used for file uploads.
 * Express has no built-in ability to handle file uploads - Multer fills this gap.
 * 
 * Install: npm install multer
 */

import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads directory exists
const uploadDir = path.join(import.meta.dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Option 1: Basic storage with destination only
// Files are saved with random hashed names (no extension - appears corrupted)
/*
const upload = multer({ dest: "uploads/" });
*/

// Option 2: Disk storage with custom filename (RECOMMENDED)
// Preserves original filename and extension, making files readable
const storage = multer.diskStorage({
  // Specify where files should be stored
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Store in uploads/ directory
  },
  // Specify how files should be named
  filename: (req, file, cb) => {
    // Keep original filename - preserves extension (.png, .jpg, etc.)
    // The extension is critical for file readability
    cb(null, file.originalname);
    
    // Alternative: Add timestamp to avoid filename collisions
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    // cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Option 3: File filtering - only accept certain file types
/*
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, and GIF are allowed."), false);
  }
};

const upload = multer({ 
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});
*/

// Option 4: Memory storage - stores files in memory as Buffer
// Useful for small files or when you want to process files before saving
/*
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit for memory storage
});
*/

// Multer upload modes:
// 1. .single(field) - Upload a single file
// 2. .array(field, maxCount) - Upload multiple files for same field
// 3. .fields([...]) - Upload multiple files with different field names

// Route 1: Single file upload
// Test in Postman: POST /profile → Body → form-data → key "dp" (type: File) → attach image
app.post("/profile", upload.single("dp"), (req, res) => {
  // req.file contains information about the uploaded file
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  
  res.json({
    message: "Profile picture uploaded successfully",
    file: {
      originalname: req.file.originalname,
      filename: req.file.filename,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
    },
  });
});

// Route 2: Multiple files upload (same field)
// Test in Postman: POST /gallery → Body → form-data → add multiple "photos" keys (type: File)
app.post("/gallery", upload.array("photos", 5), (req, res) => {
  // req.files is an array of uploaded files
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }
  
  res.json({
    message: `${req.files.length} files uploaded successfully`,
    files: req.files.map(file => ({
      originalname: file.originalname,
      filename: file.filename,
      size: file.size,
    })),
  });
});

// Route 3: Multiple files with different field names
// Test in Postman: POST /documents → Body → form-data → "avatar" (File), "resume" (File)
app.post("/documents", upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]), (req, res) => {
  // req.files is an object with field names as keys
  res.json({
    message: "Documents uploaded successfully",
    avatar: req.files.avatar,
    resume: req.files.resume,
  });
});

// Route 4: No file upload (regular form data)
app.post("/data", (req, res) => {
  res.json({ message: "Data received", body: req.body });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Multer demo server running on http://localhost:${PORT}`);
  console.log("Upload directory:", uploadDir);
  console.log("\nTest with Postman:");
  console.log("- POST /profile with form-data key 'dp' (File type)");
  console.log("- POST /gallery with form-data key 'photos' (multiple files)");
  console.log("- POST /documents with form-data keys 'avatar' and 'resume'");
});
