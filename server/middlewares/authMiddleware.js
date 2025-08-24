// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Admin from "../models/adminModel.js";

// Middleware to protect routes (works for both users and admins)
export const protect = (model = "user") => {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      let account;
      if (model === "admin") {
        account = await Admin.findById(decoded.id).select("-password");
      } else {
        account = await User.findById(decoded.id).select("-password");
      }

      if (!account) {
        return res.status(401).json({ message: `${model} not found` });
      }

      if (model === "user" && account.isBanned) {
        return res.status(403).json({ message: "User banned" });
      }

      req[model] = account;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};

// Middleware to restrict by role (admins or other roles)
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user?.role || req.admin?.role;

    if (!roles.includes(userRole)) {
      return res
        .status(403)
        .json({ message: "Forbidden: insufficient permissions" });
    }
    next();
  };
};
