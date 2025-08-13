import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true, minlenght: 5, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true, minlenght: 6, trim: true },
}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);
export default userModel;
