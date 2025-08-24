import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { Link } from 'react-router-dom';
import Loader from '../components/common/Loader';

export default function ManagePosts() {
  const [posts, setPosts] = useState(null);
  const fetch = async () => {
    try {
      const res = await API.get('/posts?limit=100');
      setPosts(res.data.items || res.data.posts || res.data);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetch(); }, []);

  if (!posts) return <Loader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Manage Posts</h2>
        <Link to="/admin/posts/create" className="px-3 py-1 bg-green-600 text-white rounded">Create Post</Link>
      </div>
      <ul className="space-y-3">
        {posts.map(p => (
          <li key={p._id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-gray-500">{p.status} · {new Date(p.createdAt).toLocaleDateString()}</div>
            </div>
            <div className="flex gap-2">
              <Link to={`/admin/posts/edit/${p._id}`} className="px-3 py-1 border rounded">Edit</Link>
              <button onClick={async () => { if (!confirm('Delete post?')) return; await API.delete(`/posts/${p._id}`); fetch(); }} className="px-3 py-1 border rounded text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
