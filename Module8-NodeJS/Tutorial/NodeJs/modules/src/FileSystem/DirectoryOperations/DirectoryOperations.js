import { mkdir, rmdir, rm, access } from "fs/promises";
import * as constants from "node:constants";

// Create directory (recursive creates parent dirs too)
await mkdir("./uploads/images/thumbnails", { recursive: true });

// Remove empty directory
await mkdir("./empty-folder");
await rmdir("./empty-folder");

// Remove directory with contents (like rm -rf)
await rm("./temp", { recursive: true, force: true });


// Checking If File/Directory Exists
async function fileExists(path) {
    try {
        await access(path, constants.F_OK);
        console.log("File exists");
        return true;
    } catch {
        console.log("File does not exist");
        return false;
    }
}

if (await fileExists("./config.json")) {
    console.log("File exists");
} else {
    console.log("File does not exist");
}