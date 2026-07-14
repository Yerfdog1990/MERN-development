import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Proxy /api and /uploads to the Express backend so the UI
// can use relative URLs with no CORS concerns in development.
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 5173,
        proxy: {
            "/api": "http://localhost:3000",
            "/uploads": "http://localhost:3000",
        },
    },
});
