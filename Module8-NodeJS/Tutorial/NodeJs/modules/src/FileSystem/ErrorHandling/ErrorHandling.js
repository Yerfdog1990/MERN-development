import { readFile, writeFile } from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "users.json");

async function getUsers() {
    const data = await readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
}

async function saveUsers(users) {
    await writeFile(DB_PATH, JSON.stringify(users, null, 2));
}

async function addUser(user) {
    const users = await getUsers();
    user.id = Date.now();
    users.push(user);
    await saveUsers(users);
    return user;
}