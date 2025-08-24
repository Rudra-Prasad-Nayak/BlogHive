import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <article className="border rounded-2xl p-4 hover:shadow transition">
      <Link to={`/post/${post.slug}`}>
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {post.readingTime || "—"} min read ·{" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <p className="mt-2 line-clamp-3 text-gray-700">
          {post.excerpt || post.content?.slice(0, 140)}
        </p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {post.tags?.slice(0, 4).map((t) => (
            <span key={t} className="text-xs border rounded px-2 py-0.5">
              #{t}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
