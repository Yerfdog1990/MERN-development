const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const multer = require("multer");
const config = require("../config");
const AppError = require("../utils/AppError");

const UPLOAD_DIR = path.join(__dirname, "..", "..", "uploads");

// Ensure the upload directory exists on startup (multer won't create it)
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
        // Never trust originalname: generate a unique, safe filename
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, `tour-${req.params.id}-${crypto.randomUUID()}${ext}`);
    },
});

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const ALLOWED_EXT = /\.(jpe?g|png|webp|gif)$/i;

function imageFilter(req, file, cb) {
    // Check BOTH mimetype and extension — attackers rename files
    const extOk = ALLOWED_EXT.test(path.extname(file.originalname));
    if (ALLOWED_TYPES.includes(file.mimetype) && extOk) {
        cb(null, true);
    } else {
        cb(new AppError("Only JPEG, PNG, WebP and GIF images are allowed", 400));
    }
}

const upload = multer({
    storage,
    fileFilter: imageFilter,
    limits: { fileSize: config.uploads.maxFileSize, files: 1 },
});

module.exports = { upload, UPLOAD_DIR };
