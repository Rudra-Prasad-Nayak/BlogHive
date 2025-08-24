import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import PostCard from '../components/common/PostCard';
import Loader from '../components/common/Loader';

export default function BlogList() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await API.get('/posts?status=published&limit=30');
        setPosts(res.data.items || res.data.posts || res.data);
      } catch (err) { console.error(err); }
    })();
  }, []);
  if (!posts) return <Loader />;
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map(p => <PostCard key={p._id || p.id} post={p} />)}
      </div>
    </div>
  );
}
