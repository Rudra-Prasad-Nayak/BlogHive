import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["user", "author", "editor", "admin"],
      default: "user",
    },
    avatarUrl: String,
    isBanned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
