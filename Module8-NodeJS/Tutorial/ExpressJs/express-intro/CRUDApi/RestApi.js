const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(express.json());

let users = [
    { id: "1", name: "Vikas", email: "vikas@example.com", role: "admin" },
    { id: "2", name: "Rahul", email: "rahul@example.com", role: "user" },
];

// GET all users (with filtering and pagination)
app.get("/api/users", (req, res) => {
    let result = [...users];

    // Filtering
    if (req.query.role) {
        result = result.filter((u) => u.role === req.query.role);
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedResult = result.slice(startIndex, endIndex);

    res.json({
        data: paginatedResult,
        pagination: {
            total: result.length,
            page,
            limit,
            totalPages: Math.ceil(result.length / limit),
        },
    });
});

// GET single user
app.get("/api/users/:id", (req, res) => {
    const user = users.find((u) => u.id === req.params.id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json({ data: user });
});

// POST create user
app.post("/api/users", (req, res) => {
    const { name, email, role } = req.body;

    // Validation
    if (!name || !email) {
        return res.status(400).json({
            error: "Validation failed",
            details: [
                ...(!name ? ["name is required"] : []),
                ...(!email ? ["email is required"] : []),
            ],
        });
    }

    // Check duplicate
    if (users.find((u) => u.email === email)) {
        return res.status(409).json({ error: "Email already exists" });
    }

    const newUser = { id: uuidv4(), name, email, role: role || "user" };
    users.push(newUser);

    res.status(201).json({ data: newUser });
});

// PUT replace user
app.put("/api/users/:id", (req, res) => {
    const index = users.findIndex((u) => u.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    const { name, email, role } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "name and email are required" });
    }

    users[index] = { id: req.params.id, name, email, role: role || "user" };
    res.json({ data: users[index] });
});

// PATCH partial update
app.patch("/api/users/:id", (req, res) => {
    const user = users.find((u) => u.id === req.params.id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    const allowedFields = ["name", "email", "role"];
    for (const field of allowedFields) {
        if (req.body[field] !== undefined) {
            user[field] = req.body[field];
        }
    }

    res.json({ data: user });
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
    const index = users.findIndex((u) => u.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    users.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => console.log("API running on port 3000"));