const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "John Smith" },
];

// GET — retrieve data
app.get("/users", (req, res) => {
    res.json(users);
});

// POST — create data
app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT — replace entire resource
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    // Replace user with id
    res.json({ updated: true });
});

// PATCH — partial update
app.patch("/users/:id", (req, res) => {
    // Update specific fields
    res.json({ patched: true });
});

// DELETE — remove data
app.delete("/users/:id", (req, res) => {
    res.status(204).send(); // No content
});

// Route Parameters
// /users/123
app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id); // "123" -> 123
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Multiple params: /posts/5/comments/12
app.get("/posts/:postId/comments/:commentId", (req, res) => {
    const { postId, commentId } = req.params;
    res.json({ postId, commentId });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});