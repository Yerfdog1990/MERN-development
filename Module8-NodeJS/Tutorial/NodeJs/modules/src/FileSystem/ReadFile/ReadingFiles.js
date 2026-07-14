import { readFile, readdir } from "fs/promises";
import {join} from "path";

// Read text file
const content = await readFile(join(import.meta.dirname, "./data/config.json"), "utf-8");
const config = JSON.parse(content);
console.log("JSON config:", config);

// Read binary file (no encoding = Buffer)
const imageBuffer = await readFile(join(import.meta.dirname, "./images/logo.png"));
console.log("Image buffer:", imageBuffer);

// Read directory contents
const files = await readdir(join(import.meta.dirname, "./data"));
console.log("Files:", files); // ["file1.txt", "file2.txt", "subfolder"]

// Read directory with details
const entries = await readdir(join(import.meta.dirname, "./data"), { withFileTypes: true });
entries.forEach((entry) => {
    console.log("Directory:", `${entry.name} — ${entry.isDirectory() ? "dir" : "file"}`);
});