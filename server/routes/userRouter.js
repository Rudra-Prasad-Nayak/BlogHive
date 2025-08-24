import { Router } from "express";
import {
  listUsers,
  updateUserRole,
  toggleBan,
} from "../controllers/userController.js";
import { protect, restrictTo } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", protect, restrictTo("editor", "admin"), listUsers);
router.put("/:id/role", protect, restrictTo("admin"), updateUserRole);
router.put("/:id/toggle-ban", protect, restrictTo("admin"), toggleBan);

export default router;
