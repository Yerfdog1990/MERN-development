import http from "http";
import { URL } from "url";

const server = http.createServer((req, res) => {
    console.log(req.method); // "GET", "POST", etc.
    console.log(req.url); // "/users?page=2"
    console.log(req.headers); // { host: "localhost:3000", ... }

    // Parse URL
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url.pathname); // "/users"
    console.log(url.searchParams.get("page")); // "2"

    res.end("OK");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});