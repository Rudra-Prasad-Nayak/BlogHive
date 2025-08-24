import React from "react";
import { Link } from "react-router-dom";

function Resources() {
  // Resource categories
  const resourceCategories = [
    {
      id: "blogging-tools",
      title: "Blogging Tools",
      description:
        "Essential tools to enhance your blogging workflow and productivity.",
      resources: [
        {
          name: "WordPress",
          description:
            "The most popular content management system for blogs and websites.",
          link: "https://wordpress.org/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              ></path>
            </svg>
          ),
        },
        {
          name: "Grammarly",
          description:
            "AI-powered writing assistant that helps improve grammar, spelling, and style.",
          link: "https://www.grammarly.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          ),
        },
        {
          name: "Canva",
          description:
            "Design platform for creating stunning blog graphics, social media images, and more.",
          link: "https://www.canva.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          ),
        },
        {
          name: "Yoast SEO",
          description:
            "WordPress plugin that helps optimize your content for search engines.",
          link: "https://yoast.com/wordpress/plugins/seo/",
          icon: (
            <svg
              className="w-8 h-8"
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
          ),
        },
      ],
    },
    {
      id: "seo-resources",
      title: "SEO Resources",
      description:
        "Tools and resources to help improve your blog's search engine visibility.",
      resources: [
        {
          name: "Google Search Console",
          description:
            "Free tool from Google to monitor and optimize your site's presence in search results.",
          link: "https://search.google.com/search-console",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
          ),
        },
        {
          name: "Ahrefs",
          description:
            "Comprehensive SEO toolset for backlink analysis, keyword research, and competitor analysis.",
          link: "https://ahrefs.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              ></path>
            </svg>
          ),
        },
        {
          name: "Moz",
          description:
            "SEO software, tools, and resources to help improve your rankings.",
          link: "https://moz.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          ),
        },
        {
          name: "SEMrush",
          description:
            "All-in-one marketing toolkit for digital marketing professionals.",
          link: "https://www.semrush.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          ),
        },
      ],
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description:
        "Resources to help you create engaging and high-quality blog content.",
      resources: [
        {
          name: "Hemingway Editor",
          description:
            "Makes your writing bold and clear by highlighting complex sentences and common errors.",
          link: "https://hemingwayapp.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          ),
        },
        {
          name: "Unsplash",
          description:
            "Beautiful, free images and photos that you can download and use for your blog.",
          link: "https://unsplash.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          ),
        },
        {
          name: "Pexels",
          description: "Free stock photos and videos you can use everywhere.",
          link: "https://www.pexels.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          ),
        },
        {
          name: "ChatGPT",
          description:
            "AI-powered language model that can help with content ideas, outlines, and drafting.",
          link: "https://chat.openai.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          ),
        },
      ],
    },
    {
      id: "monetization",
      title: "Monetization",
      description:
        "Tools and platforms to help you monetize your blog and generate income.",
      resources: [
        {
          name: "Google AdSense",
          description:
            "Free, simple way to earn money by placing ads on your blog.",
          link: "https://www.google.com/adsense/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
        },
        {
          name: "Amazon Associates",
          description:
            "Affiliate marketing program that allows you to earn commissions by promoting Amazon products.",
          link: "https://affiliate-program.amazon.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          ),
        },
        {
          name: "Patreon",
          description:
            "Membership platform that makes it easy for creators to get paid.",
          link: "https://www.patreon.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          ),
        },
        {
          name: "Teachable",
          description:
            "Platform for creating and selling online courses based on your blog expertise.",
          link: "https://teachable.com/",
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          ),
        },
      ],
    },
  ];

  // Free guides
  const freeGuides = [
    {
      title: "The Ultimate SEO Guide for Bloggers",
      description:
        "Learn how to optimize your blog for search engines and drive organic traffic.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      link: "#",
    },
    {
      title: "Content Creation Mastery",
      description:
        "Discover strategies for creating engaging, shareable content that resonates with your audience.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      link: "#",
    },
    {
      title: "Monetization Strategies for Bloggers",
      description:
        "Explore different ways to monetize your blog and turn your passion into profit.",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      link: "#",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Blogging Resources
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We've curated the best tools, resources, and guides to help you
          succeed in your blogging journey.
        </p>
      </section>

      {/* Resource Categories */}
      <section>
        <div className="space-y-12">
          {resourceCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {category.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105 flex flex-col h-full"
                  >
                    <div className="text-primary-600 dark:text-primary-400 mb-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {resource.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {resource.description}
                    </p>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                      <span>Visit Website</span>
                      <svg
                        className="w-5 h-5 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Guides Section */}
      <section className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Free Blogging Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {freeGuides.map((guide, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {guide.description}
                </p>
                <a
                  href={guide.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium"
                >
                  <span>Download Guide</span>
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resource Categories Navigation */}
      <section className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Browse Resources by Category
        </h2>
        <div className="flex flex-wrap gap-4">
          {resourceCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="px-4 py-2 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300"
            >
              {category.title}
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get More Resources Delivered to Your Inbox
          </h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter to receive exclusive blogging tips,
            resources, and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900 w-full sm:w-auto sm:flex-1 max-w-md"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm mt-4 text-white text-opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Need Personalized Help?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Our team of blogging experts is here to help you with personalized
          advice and solutions.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
        >
          <span>Contact Us</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      </section>
    </div>
  );
}

export default Resources;
