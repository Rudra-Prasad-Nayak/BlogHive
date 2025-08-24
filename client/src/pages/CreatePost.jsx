import React, { useState } from 'react';
import API from '../utils/api';
import RichTextEditor from '../components/common/RichTextEditor';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const nav = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('draft');
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();

    // Get the admin token explicitly
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      alert('You must be logged in as admin to create a post');
      return;
    }

    const fd = new FormData();
    fd.append('title', title);
    fd.append('content', content);
    fd.append(
      'tags',
      JSON.stringify(
        tags
          .split(',')
          .map(t => t.trim())
          .filter(Boolean)
      )
    );
    fd.append('status', status);
    if (cover) fd.append('cover', cover);

    try {
      setLoading(true);
      await API.post('/posts', fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${adminToken}` // Force admin token
        }
      });
      nav('/admin/posts');
    } catch (err) {
      alert(err.response?.data?.message || 'Create failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Create Post</h2>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border p-2 rounded"
        />
        <RichTextEditor value={content} onChange={setContent} />
        <input
          value={tags}
          onChange={e => setTags(e.target.value)}
          placeholder="tags (comma separated)"
          className="w-full border p-2 rounded"
        />
        <div className="flex gap-3 items-center">
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="draft">Draft</option>
            <option value="published">Publish</option>
          </select>
          <input
            type="file"
            accept="image/*"
            onChange={e => setCover(e.target.files?.[0])}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
}
