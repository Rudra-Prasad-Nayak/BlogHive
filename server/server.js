import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// Configure dotenv file
import dotenv from "dotenv";
dotenv.config();

// Import Database
import connectDB from "./config/db.js";

const app = express();

// Database Connection
await connectDB();

// Import Routes
import userRouter from "./routes/userRouter.js";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

// Main Route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Api Routes
app.use("/api/user", userRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
