import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">
        404
      </h1>

      <div className="absolute rotate-12 rounded-full bg-primary-100 dark:bg-primary-900 px-2 text-sm text-primary-600 dark:text-primary-400">
        Page Not Found
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! We can't find that page
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
          >
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 bg-white dark:bg-dark-800 text-primary-600 dark:text-primary-400 font-medium rounded-lg border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
