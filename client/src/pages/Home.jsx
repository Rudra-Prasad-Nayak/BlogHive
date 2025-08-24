import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Mock data for featured posts
  const featuredPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      author: "Jane Smith",
      date: "May 15, 2023",
      category: "React",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt:
        "Discover how to create beautiful, responsive designs quickly using Tailwind CSS utility classes.",
      author: "John Doe",
      date: "June 2, 2023",
      category: "CSS",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Modern JavaScript Features Every Developer Should Know",
      excerpt:
        "Explore the latest JavaScript features that can make your code more concise, readable, and powerful.",
      author: "Alex Johnson",
      date: "June 10, 2023",
      category: "JavaScript",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Mock data for recent posts
  const recentPosts = [
    {
      id: 4,
      title: "Introduction to GraphQL",
      excerpt:
        "Learn the basics of GraphQL and how it differs from traditional REST APIs.",
      author: "Sarah Williams",
      date: "June 15, 2023",
      category: "API",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "State Management with Redux Toolkit",
      excerpt:
        "Simplify your Redux code with Redux Toolkit and learn best practices for state management.",
      author: "Michael Brown",
      date: "June 18, 2023",
      category: "Redux",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Building a Full-Stack Application with MERN",
      excerpt:
        "Step-by-step guide to creating a full-stack application using MongoDB, Express, React, and Node.js.",
      author: "David Chen",
      date: "June 22, 2023",
      category: "Full-Stack",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Mock data for categories
  const categories = [
    { name: "React", count: 24 },
    { name: "JavaScript", count: 42 },
    { name: "CSS", count: 18 },
    { name: "Node.js", count: 15 },
    { name: "Full-Stack", count: 12 },
    { name: "API", count: 8 },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to BlogHive
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover stories, ideas, and expertise from writers on any topic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Reading
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Featured Posts
          </h2>
          <Link
            to="/blog"
            className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  <Link
                    to={`/blog/${post.id}`}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    By {post.author} • {post.date}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Recent Posts and Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Recent Posts
          </h2>

          <div className="space-y-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link
                      to={`/blog/${post.id}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      By {post.author} • {post.date}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Categories */}
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={`/blog/category/${category.name.toLowerCase()}`}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300"
                  >
                    <span className="text-gray-700 dark:text-gray-300">
                      {category.name}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-800 dark:bg-dark-600 dark:text-gray-300">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl shadow-md p-6 text-white">
            <h3 className="text-xl font-bold mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="mb-4 text-white/90">
              Get the latest posts and updates delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-primary-700 font-medium rounded-lg hover:bg-white/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 dark:bg-dark-800 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to share your story?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Join our community of writers and readers. Create an account to start
          publishing your own blog posts.
        </p>
        <Link
          to="/register"
          className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Home;
