const bcrypt = require("bcryptjs");
const JsonStore = require("../repositories/JsonStore");
const AppError = require("../utils/AppError");

const store = new JsonStore("users.json");

/** Strip fields that must never leave the server. */
function sanitize(user) {
    if (!user) return null;
    const { passwordHash, ...safe } = user;
    return safe;
}

async function findByEmail(email) {
    const users = await store.find();
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null;
}

async function findById(id) {
    return store.findById(id);
}

async function createUser({ name, email, password, role = "user" }) {
    if (await findByEmail(email)) {
        throw new AppError("An account with this email already exists", 409);
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await store.create({ name, email: email.toLowerCase(), passwordHash, role, active: true });
    return sanitize(user);
}

async function verifyCredentials(email, password) {
    const user = await findByEmail(email);
    // Same error for wrong email and wrong password — don't leak which
    if (!user || !user.active || !(await bcrypt.compare(password, user.passwordHash))) {
        throw new AppError("Incorrect email or password", 401);
    }
    return sanitize(user);
}

async function listUsers() {
    const users = await store.find();
    return users.map(sanitize);
}

async function updateMe(id, { name }) {
    const user = await store.update(id, { name });
    if (!user) throw new AppError("User not found", 404);
    return sanitize(user);
}

async function updatePassword(id, currentPassword, newPassword) {
    const user = await store.findById(id);
    if (!user) throw new AppError("User not found", 404);
    if (!(await bcrypt.compare(currentPassword, user.passwordHash))) {
        throw new AppError("Current password is incorrect", 401);
    }
    const passwordHash = await bcrypt.hash(newPassword, 12);
    return sanitize(await store.update(id, { passwordHash }));
}

async function setRole(id, role, actingUserId) {
    if (id === actingUserId) {
        throw new AppError("Admins cannot change their own role", 409);
    }
    const user = await store.update(id, { role });
    if (!user) throw new AppError("User not found", 404);
    return sanitize(user);
}

async function setActive(id, active, actingUserId) {
    if (id === actingUserId) {
        throw new AppError("Admins cannot deactivate themselves", 409);
    }
    const user = await store.update(id, { active });
    if (!user) throw new AppError("User not found", 404);
    return sanitize(user);
}

module.exports = {
    sanitize, findByEmail, findById, createUser, verifyCredentials,
    listUsers, updateMe, updatePassword, setRole, setActive,
};
