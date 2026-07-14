import {rename, unlink, copyFile, stat, writeFile, mkdir} from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Create a file
try {
  await mkdir(join(__dirname, "temp"), { recursive: true });
  await writeFile(join(__dirname, "temp/cache.json"), "{}", "utf-8");
} catch (err) {
  console.log("Write error:", err.message);
}

// Rename / Move
try {
  // Create source file if it doesn't exist
  await writeFile(join(__dirname, "old-name.txt"), "content", "utf-8");
  await rename(join(__dirname, "old-name.txt"), join(__dirname, "new-name.txt"));

  // Create archive directory and file before moving it
  await mkdir(join(__dirname, "archive"), { recursive: true });
  await writeFile(join(__dirname, "file.txt"), "file content", "utf-8");
  await rename(join(__dirname, "file.txt"), join(__dirname, "archive/file.txt")); // Move to another dir
} catch (err) {
  console.log("Rename error:", err.message);
}

// Delete file
try {
  await unlink(join(__dirname, "temp/cache.json"));
} catch (err) {
  console.log("Unlink error:", err.message);
}

// Copy file
try {
  // Create backup directory and source file before copying
  await mkdir(join(__dirname, "backup"), { recursive: true });
  await writeFile(join(__dirname, "source.txt"), "source content", "utf-8");
  await copyFile(join(__dirname, "source.txt"), join(__dirname, "backup/source.txt"));
} catch (err) {
  console.log("Copy error:", err.message);
}

// Get file info
try {
  // Create the directory and file if they don't exist
  await mkdir(join(__dirname, "data"), { recursive: true });
  await writeFile(join(__dirname, "data/config.json"), '{"key": "value"}', "utf-8");
  const info = await stat(join(__dirname, "data/config.json"));
  console.log(info.size); // Size in bytes
  console.log(info.isFile()); // true
  console.log(info.isDirectory()); // false
  console.log(info.mtime); // Last modified time
} catch (err) {
  console.log("Stat error:", err.message);
}