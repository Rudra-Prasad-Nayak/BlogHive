import mongoose from "mongoose";
import slugify from 'slugify';

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    excerpt: String,
    content: { type: String, required: true }, // Markdown or HTML
    coverImage: String,
    readingTime: Number,
    status: {
      type: String,
      enum: ["draft", "published", "scheduled"],
      default: "draft",
    },
    publishedAt: Date,
    categories: [String],
    tags: [String],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    views: { type: Number, default: 0 },
    meta: {
      description: String,
    },
  },
  { timestamps: true }
);

// Text search on key fields
postSchema.index({ title: "text", content: "text", tags: "text" });

// Pre-save hook to auto-generate slug if not provided
postSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

// Optional: Auto-calculate reading time before save
postSchema.pre("save", function (next) {
  if (this.content) {
    const wordsPerMinute = 200; // average reading speed
    const wordCount = this.content.split(/\s+/).length;
    this.readingTime = Math.ceil(wordCount / wordsPerMinute);
  }
  next();
});

const postModel = mongoose.model("Post", postSchema);
export default postModel;
