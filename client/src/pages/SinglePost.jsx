import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';
import Loader from '../components/common/Loader';
import DOMPurify from 'dompurify';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get(`/posts/${slug}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [slug]);

  if (!post) return <Loader />;

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">By {post.author?.name || 'Unknown'} · {post.readingTime} min read</p>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content || '') }} />
      {/* Comments (simple link to comments section or embedded comment UI) */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold">Comments</h3>
        {/* For brevity: show comment form only if logged in */}
        {user ? (
          <CommentForm postId={post._id} />
        ) : (
          <p><a href="/login">Login</a> to comment.</p>
        )}
        <CommentList postId={post._id} />
      </section>
    </article>
  );
}

/* Small inline comment form & list components */
function CommentForm({ postId }) {
  const [text, setText] = React.useState('');
  async function submit() {
    if (!text.trim()) return;
    await API.post('/comments', { postId, body: text });
    setText('');
    window.location.reload();
  }
  return (
    <div className="mt-3">
      <textarea className="w-full border p-2 rounded" value={text} onChange={e => setText(e.target.value)} />
      <div className="mt-2">
        <button onClick={submit} className="px-3 py-1 bg-blue-600 text-white rounded">Post comment</button>
      </div>
    </div>
  );
}

function CommentList({ postId }) {
  const [items, setItems] = React.useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await API.get(`/comments/post/${postId}`);
        setItems(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [postId]);

  if (!items) return <div className="mt-3">Loading comments…</div>;
  return (
    <ul className="mt-3 space-y-3">
      {items.map(c => (
        <li key={c._id} className="border p-3 rounded">
          <div className="text-sm text-gray-600">{c.author?.name || 'Guest'} · {new Date(c.createdAt).toLocaleString()}</div>
          <p className="mt-1">{c.body}</p>
        </li>
      ))}
    </ul>
  );
}
