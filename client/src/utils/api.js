import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

// ✅ Add auth token (admin first, then user)
API.interceptors.request.use((cfg) => {
  const adminToken = localStorage.getItem("adminToken");
  const userToken = localStorage.getItem("token");

  if (adminToken) {
    cfg.headers.Authorization = `Bearer ${adminToken}`;
  } else if (userToken) {
    cfg.headers.Authorization = `Bearer ${userToken}`;
  }

  return cfg;
});

// ✅ Wrapper functions
export const APIpost = (url, data) => API.post(url, data);
export const APIget = (url) => API.get(url);
export const APIput = (url, data) => API.put(url, data);
export const APIdelete = (url) => API.delete(url);

export default API;
