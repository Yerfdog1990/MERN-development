import http from "http";
import { URL } from "url";

const users = [
    { id: 1, name: "Vikas" },
    { id: 2, name: "Rahul" },
];

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    const method = req.method;

    // Set JSON header for all responses
    res.setHeader("Content-Type", "application/json");

    // GET /api/users
    if (method === "GET" && path === "/api/users") {
        res.writeHead(200);
        res.end(JSON.stringify(users));
    }

    // GET /api/users/:id
    else if (method === "GET" && path.match(/^\/api\/users\/\d+$/)) {
        const id = parseInt(path.split("/").pop());
        const user = users.find((u) => u.id === id);

        if (user) {
            res.writeHead(200);
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: "User not found" }));
        }
    }

    // POST /api/users
    else if (method === "POST" && path === "/api/users") {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
            const newUser = JSON.parse(body);
            newUser.id = users.length + 1;
            users.push(newUser);

            res.writeHead(201);
            res.end(JSON.stringify(newUser));
        });
    }

    // 404
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(3000, () => console.log("Server on port 3000"));