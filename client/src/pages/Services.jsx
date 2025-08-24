import React from "react";
import { Link } from "react-router-dom";

function Services() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Content Creation",
      description:
        "Professional blog content creation tailored to your audience and optimized for search engines.",
      icon: (
        <svg
          className="w-12 h-12"
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
      features: [
        "SEO-optimized articles",
        "Engaging and informative content",
        "Regular posting schedule",
        "Topic research and planning",
        "Custom content strategy",
      ],
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Custom blog and website development using modern technologies for optimal performance and user experience.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
      features: [
        "Responsive design",
        "Fast loading times",
        "SEO-friendly structure",
        "Custom themes and layouts",
        "Content management systems",
      ],
    },
    {
      id: 3,
      title: "Social Media Integration",
      description:
        "Seamless integration of your blog with social media platforms to maximize reach and engagement.",
      icon: (
        <svg
          className="w-12 h-12"
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
      features: [
        "Auto-sharing to social platforms",
        "Social media widgets",
        "Comment integration",
        "Social sharing buttons",
        "Analytics and reporting",
      ],
    },
    {
      id: 4,
      title: "SEO Optimization",
      description:
        "Comprehensive SEO services to improve your blog's visibility and ranking in search engine results.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          ></path>
        </svg>
      ),
      features: [
        "Keyword research and optimization",
        "Meta tags and descriptions",
        "Content structure optimization",
        "Internal linking strategy",
        "Performance monitoring",
      ],
    },
    {
      id: 5,
      title: "Content Strategy",
      description:
        "Strategic planning and guidance to help you create content that resonates with your audience and achieves your goals.",
      icon: (
        <svg
          className="w-12 h-12"
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
      features: [
        "Audience analysis",
        "Content calendar planning",
        "Topic research and ideation",
        "Performance analysis",
        "Content optimization recommendations",
      ],
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance and support to keep your blog running smoothly and securely.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      ),
      features: [
        "Regular updates and backups",
        "Security monitoring",
        "Performance optimization",
        "Technical support",
        "Content updates and revisions",
      ],
    },
  ];

  // Pricing plans
  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "per month",
      description:
        "Perfect for individuals just starting their blogging journey.",
      features: [
        "2 blog posts per month",
        "Basic SEO optimization",
        "Social media sharing",
        "Monthly performance report",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$249",
      period: "per month",
      description: "Ideal for growing blogs looking to expand their audience.",
      features: [
        "5 blog posts per month",
        "Advanced SEO optimization",
        "Social media strategy",
        "Weekly performance reports",
        "Priority email & chat support",
        "Content strategy session",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "per month",
      description:
        "Comprehensive solution for established blogs and businesses.",
      features: [
        "10 blog posts per month",
        "Premium SEO optimization",
        "Full social media management",
        "Daily performance tracking",
        "24/7 priority support",
        "Monthly strategy sessions",
        "Custom development work",
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We offer a range of professional services to help you create, grow,
          and maintain a successful blog.
        </p>
      </section>

      {/* Services Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                1
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Discovery
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We learn about your goals, audience, and unique challenges.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                2
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Strategy
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We develop a customized plan to achieve your specific objectives.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                3
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Implementation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We execute the strategy with precision and attention to detail.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                4
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Optimization
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We continuously monitor, analyze, and improve for optimal results.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md overflow-hidden ${
                plan.highlighted
                  ? "ring-2 ring-primary-500 bg-white dark:bg-dark-800"
                  : "bg-white dark:bg-dark-800"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.highlighted
                      ? "bg-primary-600 hover:bg-primary-700 text-white"
                      : "bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-900 dark:text-white"
                  } transition-colors duration-300`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Take Your Blog to the Next Level?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how we can help you achieve your blogging
          goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors duration-300"
          >
            Explore Our Blog
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              How long does it take to see results?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Results vary depending on your starting point, goals, and the
              services you choose. Generally, you can expect to see initial
              improvements in 1-3 months, with more significant results in 3-6
              months of consistent effort.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Can I upgrade or downgrade my plan?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, you can change your plan at any time. We'll prorate the
              difference and apply it to your next billing cycle. Contact our
              support team to make changes to your subscription.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Do you offer custom services?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Absolutely! We understand that every blog is unique. Contact us to
              discuss your specific needs, and we'll create a custom package
              tailored to your goals and budget.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              What if I'm not satisfied with the service?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We stand behind our work and want you to be completely satisfied.
              If you're not happy with our services, please let us know, and
              we'll work with you to make it right or provide a refund according
              to our satisfaction guarantee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
