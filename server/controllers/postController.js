import slugify from "slugify";
import jwt from "jsonwebtoken";
import Post from "../models/postModel.js";

// Utility function to calculate reading time
const computeReadingTime = (text = "") => {
  const words = text
    .replace(/[#>*_`-]/g, " ") // remove markdown symbols
    .split(/\s+/) // split by spaces
    .filter(Boolean).length; // remove empty entries
  return Math.max(1, Math.round(words / 200)); // assume 200 WPM
};

// CREATE POST
export const createPost = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Create post object (without waiting for file operations yet)
    const postData = {
      title: req.body.title,
      content: req.body.content,
      tags: JSON.parse(req.body.tags || "[]"),
      status: req.body.status || "draft",
      author: decoded.id,
    };

    if (req.file) {
      postData.coverImage = req.file.path;
    }

    // Save post immediately
    const post = new Post(postData);
    await post.save();

    // Respond FAST — tell the frontend it's done
    res.status(201).json({ message: "Post created", postId: post._id });

    // ---- Background work (does not block user) ----
    if (req.file) {
      // Example: You could upload to cloud storage here
      // Simulate background upload delay
      setTimeout(() => {
        console.log(`Image ${req.file.path} processed for post ${post._id}`);
      }, 1000);
    }
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.status(500).json({ message: err.message });
    }
  }
};

// GET POSTS WITH FILTERS
export const getPosts = async (req, res) => {
  try {
    const {
      q,
      tag,
      category,
      page = 1,
      limit = 10,
      status,
      author,
    } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (tag) filter.tags = tag;
    if (category) filter.categories = category;
    if (author) filter.author = author;
    if (q) filter.$text = { $search: q };

    const skip = (Number(page) - 1) * Number(limit);

    const [items, total] = await Promise.all([
      Post.find(filter)
        .populate("author", "name role")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Post.countDocuments(filter),
    ]);

    res.json({
      items,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

// GET SINGLE POST BY SLUG
export const getPostBySlug = async (req, res) => {
  try {
    const post = await Post.findOne({
      slug: req.params.slug,
      status: "published",
    }).populate("author", "name role");

    if (!post) return res.status(404).json({ message: "Post not found" });

    post.views += 1;
    await post.save();

    res.json(post);
  } catch (err) {
    console.error("Error fetching post by slug:", err);
    res.status(500).json({ message: "Failed to fetch post" });
  }
};

// UPDATE POST
export const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = { ...req.body };

    if (updates.title) {
      updates.slug = slugify(updates.title, { lower: true, strict: true });
    }
    if (updates.content) {
      updates.readingTime = computeReadingTime(updates.content);
    }
    if (req.file) {
      updates.coverImage = `/uploads/${req.file.filename}`;
    }
    if (updates.status === "published" && !updates.publishedAt) {
      updates.publishedAt = new Date();
    }

    const post = await Post.findByIdAndUpdate(id, updates, { new: true });
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json(post);
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).json({ message: "Failed to update post" });
  }
};

// DELETE POST
export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Post.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });

    res.json({ ok: true, message: "Post deleted successfully" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
