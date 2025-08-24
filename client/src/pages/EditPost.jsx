import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import RichTextEditor from '../components/common/RichTextEditor';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [cover, setCover] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) { console.error(err); }
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <div>Loading…</div>;
  if (!post) return <div>Not found</div>;

  async function submit(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', post.title);
    fd.append('content', post.content);
    fd.append('tags', JSON.stringify(post.tags || []));
    fd.append('status', post.status || 'draft');
    if (cover) fd.append('cover', cover);
    try {
      await API.put(`/posts/${post._id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      nav('/admin/posts');
    } catch (err) {
      alert(err.response?.data?.message || 'Update failed');
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} placeholder="Title" className="w-full border p-2 rounded" />
        <RichTextEditor value={post.content} onChange={val => setPost({ ...post, content: val })} />
        <input value={(post.tags || []).join(',')} onChange={e => setPost({ ...post, tags: e.target.value.split(',').map(t => t.trim()) })} placeholder="tags (comma separated)" className="w-full border p-2 rounded" />
        <div className="flex gap-3 items-center">
          <select value={post.status} onChange={e => setPost({ ...post, status: e.target.value })} className="border p-2 rounded">
            <option value="draft">Draft</option>
            <option value="published">Publish</option>
          </select>
          <input type="file" accept="image/*" onChange={e => setCover(e.target.files?.[0])} />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      </form>
    </div>
  );
}
