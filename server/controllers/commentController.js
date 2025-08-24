import Comment from "../models/commentModel.js";

export const addComment = async (req, res) => {
  const { postId, body, parent = null } = req.body || {};
  if (!postId || !body)
    return res.status(400).json({ message: "postId & body required" });

  const comment = await Comment.create({
    post: postId,
    author: req.user?._id,
    body,
    parent,
  });
  res.status(201).json(comment);
};

export const getCommentsForPost = async (req, res) => {
  const { postId } = req.params;
  const items = await Comment.find({ post: postId, status: "approved" })
    .sort({ createdAt: 1 })
    .populate("author", "name");
  res.json(items);
};

export const listPendingComments = async (req, res) => {
  const items = await Comment.find({ status: "pending" })
    .sort({ createdAt: 1 })
    .populate("author", "name")
    .populate("post", "title");
  res.json(items);
};

export const moderateComment = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // 'approved' | 'rejected'
  const c = await Comment.findByIdAndUpdate(id, { status }, { new: true });
  if (!c) return res.status(404).json({ message: "Comment not found" });
  res.json(c);
};

export const deleteComment = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
