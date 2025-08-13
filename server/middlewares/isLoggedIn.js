import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const isLoggedIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token missing." });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ email: decoded.email }).select("-password");
    if (!user) return res.status(401).json({ error: "User not found." });

    req.user = user;
    next();
  } catch (err) {
    req.flash("error", "Something went wrong.");
    return res.redirect("/");
  }
};

export default isLoggedIn;
