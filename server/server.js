import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

// Configure dotenv file
import dotenv from "dotenv";
dotenv.config();

// Import Database
import connectDB from "./config/db.js";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

// Database Connection
connectDB();

// Import Routes
import authRouter from "./routes/authRouter.js";
import postRouter from "./routes/postRouter.js";
import commentRouter from "./routes/commentRouter.js";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";

// Middlewares
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: true }));

// Rate limiting (tighter on auth)
const generalLimiter = rateLimit({ windowMs: 60_000, max: 120 });
const authLimiter = rateLimit({ windowMs: 60_000, max: 20 });
app.use(generalLimiter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Main Route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Api Routes
app.use("/api/user", authLimiter, authRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
