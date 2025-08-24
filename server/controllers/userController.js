import User from "../models/userModel.js";

export const listUsers = async (req, res) => {
  const users = await User.find().select("name email role isBanned createdAt");
  res.json(users);
};

export const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  const u = await User.findByIdAndUpdate(id, { role }, { new: true }).select(
    "name email role isBanned"
  );
  if (!u) return res.status(404).json({ message: "User not found" });
  res.json(u);
};

export const toggleBan = async (req, res) => {
  const { id } = req.params;
  const u = await User.findById(id);
  if (!u) return res.status(404).json({ message: "User not found" });
  u.isBanned = !u.isBanned;
  await u.save();
  res.json({ id: u._id, isBanned: u.isBanned });
};
