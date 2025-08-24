import React, { useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  // Sample blog posts data
  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt:
        "Learn the basics of React and how to set up your first project with create-react-app or Vite.",
      author: "Sarah Johnson",
      date: "June 15, 2023",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt:
        "Discover how to use Tailwind CSS to create beautiful, responsive designs without writing custom CSS.",
      author: "Michael Chen",
      date: "July 2, 2023",
      category: "CSS",
      image:
        "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "State Management in Modern React",
      excerpt:
        "Explore different state management solutions for React applications, from Context API to Redux and Zustand.",
      author: "Sarah Johnson",
      date: "August 10, 2023",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Building a RESTful API with Node.js",
      excerpt:
        "Learn how to create a robust RESTful API using Node.js, Express, and MongoDB.",
      author: "Michael Chen",
      date: "September 5, 2023",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "12 min read",
    },
    {
      id: 5,
      title: "Responsive Design Best Practices",
      excerpt:
        "Discover the key principles and techniques for creating websites that look great on any device.",
      author: "Sarah Johnson",
      date: "October 18, 2023",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Introduction to TypeScript",
      excerpt:
        "Get started with TypeScript and learn how it can improve your JavaScript development experience.",
      author: "Michael Chen",
      date: "November 22, 2023",
      category: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "9 min read",
    },
  ]);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories
  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  // Filter posts based on category and search query
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our latest articles, tutorials, and insights on web
          development, design, and technology.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-48">
            <select
              className="block w-full py-2 px-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link
                      to={`/blog/${post.id}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-6">
            Get the latest articles, tutorials, and updates delivered straight
            to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              className="flex-grow px-4 py-3 rounded-lg focus:ring-2 focus:ring-white text-gray-900"
              placeholder="Your email address"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Blog;
