import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import Loader from '../components/common/Loader';

export default function ManageComments() {
  const [pending, setPending] = useState(null);

  const fetch = async () => {
    try {
      const res = await API.get('/comments/pending');
      setPending(res.data.items || res.data);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetch(); }, []);

  if (!pending) return <Loader />;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pending Comments</h2>
      <ul className="space-y-3">
        {pending.map(c => (
          <li key={c._id} className="border p-3 rounded">
            <div className="text-sm text-gray-500">On: {c.post?.title}</div>
            <div className="mt-1">{c.body}</div>
            <div className="mt-3 flex gap-2">
              <button onClick={async () => { await API.put(`/comments/${c._id}/moderate`, { status: 'approved' }); fetch(); }} className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
              <button onClick={async () => { await API.put(`/comments/${c._id}/moderate`, { status: 'rejected' }); fetch(); }} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
