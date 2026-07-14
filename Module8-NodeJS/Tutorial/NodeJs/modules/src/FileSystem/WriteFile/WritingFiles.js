import { writeFile, appendFile } from "fs/promises";
import {join} from "path";

// Write (creates or overwrites)
await writeFile(join(import.meta.dirname, "file.txt"), "Hello, World!", "utf-8");

// Write JSON
const data = { name: "Vikas", age: 25 };
await writeFile(join(import.meta.dirname, "user.json"), JSON.stringify(data, null, 2));

// Append to file
await appendFile(
    join(import.meta.dirname, "logs/app.log"),
    `[${new Date().toISOString()}] Server started\n`,
);