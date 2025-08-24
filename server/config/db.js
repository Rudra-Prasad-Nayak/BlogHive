import mongoose from "mongoose";
import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected Successfully");

    const exists = await Admin.findOne({ email: "admin@example.com" });
    if (!exists) {
      const hashed = await bcrypt.hash("admin123", 10);
      await Admin.create({
        email: "admin@example.com",
        password: hashed,
        role: "admin",
      });
      console.log("Default admin created: admin@example.com / admin123");
    }
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
