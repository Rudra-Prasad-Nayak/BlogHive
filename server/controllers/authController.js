import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    let { fullName, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(409).json({ message: "User already exists", success: false });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);
        let user = await userModel.create({ fullName, email, password: hash });
        let token = generateToken(user);
        res.cookie("token", token);
        res.status(201).json({ message: "User Created Successfully", success: true });
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) return res.status(403).json({ message: "Email or Password incorrect", success: false });

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return res.status(500).json({ success: false, message: "Server error" });
      if (result) {
        let token = generateToken(user);
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({ message: "Login successfully", success: true, token, email, fullName: user.fullName });
      } else {
        res.status(401).json({ success: false, message: "Email or Password incorrect" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "lax" });
    res.status(200).json({ message: "Logout successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error during logout", success: false });
  }
};
