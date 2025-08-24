import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional (guest possible)
    body: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    }, // for nested replies
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("Comment", commentSchema);
export default commentModel;
