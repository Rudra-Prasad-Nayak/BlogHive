import { useState, useEffect } from "react";
import axios from "axios";
import API from "../../utils/api";
export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await API.get("/admin/posts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPosts(res.data);
    console.log(res.data);
  };

  const addPost = async () => {
    await API.post("/admin/posts", newPost, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setNewPost({ title: "", content: "" });
    fetchPosts();
  };

  const deletePost = async (id) => {
    await API.delete(`/admin/posts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPosts();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-4">
        <input
          placeholder="Title"
          className="border p-2 mr-2"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          placeholder="Content"
          className="border p-2 mr-2"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button
          onClick={addPost}
          className="bg-green-500 text-white px-3 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {posts.map((p) => (
          <li key={p._id} className="border p-2 mb-2 flex justify-between">
            <span>{p.title}</span>
            {/* <span>{p.content}</span> */}
            <button
              onClick={() => deletePost(p._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
