import React from "react";
import { Link } from "react-router-dom";

function About() {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Developer",
      bio: "Sarah has over 10 years of experience in web development and content creation. She founded BlogHive with a vision to create a platform where writers can share their knowledge and connect with readers worldwide.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "Co-Developer & Designer",
      bio: "Michael is a full-stack developer with expertise in React, Node.js, and UI/UX design. He leads the technical development of BlogHive, ensuring a seamless experience for all users.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About BlogHive
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're a small team of two passionate developers on a mission to create
          a vibrant community where writers and readers can connect, share
          ideas, and grow together.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              BlogHive was founded in 2022 by a team of just two developers with
              a simple idea: to create a platform where people could share their
              knowledge, experiences, and stories with the world. We believe
              that everyone has unique insights worth sharing, and our mission
              is to provide the tools and community to make that possible.
            </p>
            <p>
              What started as a small project between two friends has grown into
              a thriving community of writers and readers from all over the
              world. We're proud to have created a space where ideas can
              flourish and connections can be made.
            </p>
            <p>
              Our platform is built on the principles of accessibility,
              inclusivity, and quality. Despite being a small team, we strive to
              make BlogHive a place where diverse voices are celebrated and
              where content is valued for its substance rather than its
              sensationalism.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600 dark:text-primary-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Freedom of Expression
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in the power of diverse voices and perspectives. Our
              platform is designed to amplify voices from all backgrounds and
              experiences.
            </p>
          </div>

          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600 dark:text-primary-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Community First
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We prioritize building a supportive community where writers can
              connect, collaborate, and grow together through shared knowledge
              and feedback.
            </p>
          </div>

          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600 dark:text-primary-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Quality Content
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We value substance over sensationalism. Our platform is designed
              to promote thoughtful, well-researched, and valuable content.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a writer looking to share your ideas or a reader
          seeking inspiration, BlogHive has something for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Create an Account
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
