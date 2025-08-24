import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import Loader from '../components/common/Loader';

export default function ManageUsers() {
  const [users, setUsers] = useState(null);

  const fetch = async () => {
    try {
      const res = await API.get('/users');
      setUsers(res.data);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetch(); }, []);

  if (!users) return <Loader />;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">
                <select defaultValue={u.role} onChange={async e => { await API.put(`/users/${u._id}/role`, { role: e.target.value }); fetch(); }}>
                  <option value="user">user</option>
                  <option value="author">author</option>
                  <option value="editor">editor</option>
                  <option value="admin">admin</option>
                </select>
                <button onClick={async () => { await API.put(`/users/${u._id}/toggle-ban`); fetch(); }} className="ml-2 px-2 py-1 border rounded">Toggle Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
