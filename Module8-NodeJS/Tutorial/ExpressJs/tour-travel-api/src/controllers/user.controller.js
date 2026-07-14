const userService = require("../services/user.service");

async function listUsers(req, res) {
    const users = await userService.listUsers();
    res.json({ status: "success", results: users.length, data: users });
}

async function updateMe(req, res) {
    const user = await userService.updateMe(req.user.id, { name: req.body.name });
    res.json({ status: "success", data: user });
}

async function updatePassword(req, res) {
    await userService.updatePassword(req.user.id, req.body.currentPassword, req.body.newPassword);
    res.json({ status: "success", message: "Password updated" });
}

async function setRole(req, res) {
    const user = await userService.setRole(req.params.id, req.body.role, req.user.id);
    res.json({ status: "success", data: user });
}

async function setActive(req, res) {
    const user = await userService.setActive(req.params.id, req.body.active, req.user.id);
    res.json({ status: "success", data: user });
}

module.exports = { listUsers, updateMe, updatePassword, setRole, setActive };
