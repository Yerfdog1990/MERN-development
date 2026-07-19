import express from "express"
import userRoutes from "./src/routes/noteRoutes.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./src/middlewares/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();

// Trust proxy to get correct IP addresses behind load balancers/proxies
app.set('trust proxy', true);

const PORT = process.env.PORT || 5001;

// middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", userRoutes);

connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});