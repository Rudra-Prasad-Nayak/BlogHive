import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "author", "editor"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const adminModel = mongoose.model("Admin", adminSchema);
export default adminModel;
