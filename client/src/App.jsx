import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

// User pages
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Layout from "./components/shared/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logout from "./components/auth/Logout";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import BlogList from './pages/BlogList';
import SinglePost from './pages/SinglePost';
import Categories from './pages/Catagories';
import Search from './pages/Search';
import ProtectedRoute from './components/common/ProtectedRoute';


// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from './pages/admin/AdminDashboard';
import ManagePosts from './pages/ManagePost';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ManageCategories from './pages/ManageCategories';
import ManageUsers from './pages/ManageUsers';
import ManageComments from './pages/ManageComments';
import PrivateAdminRoute from "./components/common/PrivateAdminRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Public user routes */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/posts" element={<BlogList />} />
              <Route path="/post/:slug" element={<SinglePost />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/search" element={<Search />} />

               {/* Admin authentication */}
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Admin protected routes */}
              <Route path="/admin/dashboard" element={<PrivateAdminRoute><AdminDashboard /></PrivateAdminRoute>} />
              <Route path="/admin/posts" element={<PrivateAdminRoute><ManagePosts /></PrivateAdminRoute>} />
              <Route path="/admin/posts/create" element={<PrivateAdminRoute><CreatePost /></PrivateAdminRoute>} />
              <Route path="/admin/posts/edit/:id" element={<PrivateAdminRoute><EditPost /></PrivateAdminRoute>} />
              <Route path="/admin/categories" element={<PrivateAdminRoute><ManageCategories /></PrivateAdminRoute>} />
              <Route path="/admin/comments" element={<PrivateAdminRoute><ManageComments /></PrivateAdminRoute>}/>
              <Route path="/admin/users" element={<PrivateAdminRoute><ManageUsers /></PrivateAdminRoute>}/>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
