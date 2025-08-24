import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Sample blog posts data
  const allPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      content: `
        <p>React is a popular JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile apps. React allows you to design simple views for each state in your application, and it will efficiently update and render just the right components when your data changes.</p>
        
        <h2>Why React?</h2>
        <p>React was created by Facebook and is now maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, so creating React applications usually requires the use of additional libraries for state management and routing.</p>
        
        <h2>Setting Up Your First React Project</h2>
        <p>There are several ways to set up a React project, but the two most popular methods are:</p>
        
        <h3>1. Create React App</h3>
        <p>Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.</p>
        
        <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
        
        <h3>2. Vite</h3>
        <p>Vite is a newer build tool that provides a faster and leaner development experience for modern web projects.</p>
        
        <pre><code>npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev</code></pre>
        
        <h2>React Components</h2>
        <p>Components are the building blocks of any React application. A component is a JavaScript function or class that optionally accepts inputs (called "props") and returns a React element that describes how a section of the UI should appear.</p>
        
        <h3>Functional Components</h3>
        <pre><code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}</code></pre>
        
        <h3>Class Components</h3>
        <pre><code>class Welcome extends React.Component {
  render() {
    return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;
  }
}</code></pre>
        
        <h2>Conclusion</h2>
        <p>React is a powerful library that can help you build complex, interactive UIs. By breaking down your UI into components, React makes it easier to manage and update your application as it grows. Whether you're building a simple widget or a complex application, React provides the tools you need to create a great user experience.</p>
      `,
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
      content: `
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. Unlike other CSS frameworks like Bootstrap or Material UI, Tailwind doesn't provide pre-designed components. Instead, it gives you utility classes that you can combine to create your own unique designs.</p>
        
        <h2>Why Tailwind CSS?</h2>
        <p>Tailwind CSS offers several advantages over traditional CSS approaches:</p>
        <ul>
          <li>No more naming things - you don't have to come up with class names for everything</li>
          <li>No more context switching - you can stay in your HTML instead of jumping between files</li>
          <li>Responsive design made easy - built-in responsive modifiers make it simple to build responsive interfaces</li>
          <li>Consistency - utility classes help maintain a consistent design system</li>
        </ul>
        
        <h2>Getting Started with Tailwind CSS</h2>
        <p>To add Tailwind CSS to your project, you can use npm or yarn:</p>
        
        <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
        
        <p>Then, configure your template paths in your tailwind.config.js file:</p>
        
        <pre><code>module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
        
        <p>Finally, add the Tailwind directives to your CSS:</p>
        
        <pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
        
        <h2>Utility-First Workflow</h2>
        <p>With Tailwind, you build your designs by applying utility classes directly in your HTML:</p>
        
        <pre><code>&lt;div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"&gt;
  &lt;div class="flex-shrink-0"&gt;
    &lt;img class="h-12 w-12" src="/img/logo.svg" alt="Logo"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;div class="text-xl font-medium text-black"&gt;ChitChat&lt;/div&gt;
    &lt;p class="text-gray-500"&gt;You have a new message!&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        
        <h2>Customization</h2>
        <p>Tailwind is highly customizable. You can extend or override the default theme in your tailwind.config.js file:</p>
        
        <pre><code>module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  }
}</code></pre>
        
        <h2>Conclusion</h2>
        <p>Tailwind CSS provides a different approach to styling your applications. By embracing utility classes, you can build custom designs faster and with more consistency. While it might seem verbose at first, the productivity gains and maintainability benefits make it worth considering for your next project.</p>
      `,
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
      content: `
        <p>State management is one of the most important aspects of building React applications. As your application grows, managing state can become complex and challenging. In this article, we'll explore different state management solutions for React applications.</p>
        
        <h2>Local Component State</h2>
        <p>React's built-in useState hook is perfect for managing local component state:</p>
        
        <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
        
        <p>This works well for simple components, but as your application grows, you might need to share state between components.</p>
        
        <h2>Context API</h2>
        <p>React's Context API allows you to share state across the component tree without having to pass props down manually at every level:</p>
        
        <pre><code>// Create a context
const ThemeContext = React.createContext('light');

// Provider component
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}
    >
      Toggle Theme
    </button>
  );
}</code></pre>
      `,
      author: "Sarah Johnson",
      date: "July 15, 2023",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Building a RESTful API with Node.js and Express",
      content: `
        <p>Node.js and Express provide a powerful platform for building RESTful APIs. In this tutorial, we'll walk through the process of creating a simple API from scratch.</p>
        
        <h2>Setting Up the Project</h2>
        <p>First, let's create a new project and install the necessary dependencies:</p>
        
        <pre><code>mkdir node-api
cd node-api
npm init -y
npm install express mongoose dotenv</code></pre>
        
        <h2>Creating the Server</h2>
        <p>Now, let's create a basic Express server:</p>
        
        <pre><code>// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));</code></pre>
      `,
      author: "Michael Chen",
      date: "August 5, 2023",
      category: "Node.js",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "12 min read",
    },
  ];

  useEffect(() => {
    // Simulate fetching a blog post
    const fetchPost = () => {
      setLoading(true);
      // Find the post with the matching id
      const foundPost = allPosts.find((post) => post.id === parseInt(id));

      if (foundPost) {
        setPost(foundPost);

        // Find related posts (same category, excluding current post)
        const related = allPosts
          .filter(
            (p) => p.category === foundPost.category && p.id !== foundPost.id
          )
          .slice(0, 3);

        setRelatedPosts(related);
      }

      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/blog"
          className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Link
            to="/blog"
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          >
            Blog
          </Link>
          <span>&gt;</span>
          <span className="text-gray-700 dark:text-gray-300">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>

        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-800 dark:text-primary-300 font-bold">
              {post.author.split(" ")[0][0]}
              {post.author.split(" ")[1][0]}
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              {post.author}
            </span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">•</span>
          <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
          <span className="text-gray-500 dark:text-gray-400">•</span>
          <span className="text-gray-500 dark:text-gray-400">
            {post.readTime}
          </span>
        </div>

        <div className="w-full h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <div className="lg:col-span-2">
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="space-y-8">
          {/* Author Bio */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              About the Author
            </h3>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-800 dark:text-primary-300 text-xl font-bold flex-shrink-0">
                {post.author.split(" ")[0][0]}
                {post.author.split(" ")[1][0]}
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {post.author}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.author === "Sarah Johnson"
                    ? "Sarah has over 10 years of experience in web development and content creation. She founded BlogHive with a vision to create a platform where writers can share their knowledge."
                    : "Michael is a full-stack developer with expertise in React, Node.js, and UI/UX design. He leads the technical development of BlogHive, ensuring a seamless experience for all users."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.id}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white my-2">
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {relatedPost.title}
                    </Link>
                  </h4>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{relatedPost.date}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between border-t border-gray-200 dark:border-dark-700 pt-6">
        <Link
          to="/blog"
          className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back to Blog
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
