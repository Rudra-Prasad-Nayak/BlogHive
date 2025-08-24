import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme, COLOR_THEMES } from "../../utils/ThemeContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode, colorTheme, changeColorTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Blog", path: "/blog" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-dark-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-primary-600 dark:text-primary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
            </svg>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              BlogHive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme controls */}
            <div className="relative">
              {/* Theme toggle button */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>

              {/* Color theme selector */}
              <div className="ml-2 inline-block relative">
                <button
                  onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
                  aria-label="Select color theme"
                >
                  <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 overflow-hidden">
                    <div
                      className={`w-full h-full ${
                        colorTheme === COLOR_THEMES.DEFAULT
                          ? "bg-primary-500"
                          : colorTheme === COLOR_THEMES.DARK_BLUE
                          ? "bg-dark-blue-500"
                          : colorTheme === COLOR_THEMES.PURPLE
                          ? "bg-purple-500"
                          : colorTheme === COLOR_THEMES.GREEN
                          ? "bg-green-500"
                          : "bg-orange-500"
                      }`}
                    ></div>
                  </div>
                </button>

                {/* Theme dropdown */}
                {isThemeMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-dark-700">
                    <div className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-dark-700">
                      Select Theme
                    </div>
                    <button
                      onClick={() => {
                        changeColorTheme(COLOR_THEMES.DEFAULT);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        colorTheme === COLOR_THEMES.DEFAULT
                          ? "bg-gray-100 dark:bg-dark-700"
                          : ""
                      } hover:bg-gray-100 dark:hover:bg-dark-700 flex items-center`}
                    >
                      <span className="w-4 h-4 mr-2 rounded-full bg-primary-500"></span>
                      Blue (Default)
                    </button>
                    <button
                      onClick={() => {
                        changeColorTheme(COLOR_THEMES.DARK_BLUE);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        colorTheme === COLOR_THEMES.DARK_BLUE
                          ? "bg-gray-100 dark:bg-dark-700"
                          : ""
                      } hover:bg-gray-100 dark:hover:bg-dark-700 flex items-center`}
                    >
                      <span className="w-4 h-4 mr-2 rounded-full bg-dark-blue-500"></span>
                      Dark Blue
                    </button>
                    <button
                      onClick={() => {
                        changeColorTheme(COLOR_THEMES.PURPLE);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        colorTheme === COLOR_THEMES.PURPLE
                          ? "bg-gray-100 dark:bg-dark-700"
                          : ""
                      } hover:bg-gray-100 dark:hover:bg-dark-700 flex items-center`}
                    >
                      <span className="w-4 h-4 mr-2 rounded-full bg-purple-500"></span>
                      Purple
                    </button>
                    <button
                      onClick={() => {
                        changeColorTheme(COLOR_THEMES.GREEN);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        colorTheme === COLOR_THEMES.GREEN
                          ? "bg-gray-100 dark:bg-dark-700"
                          : ""
                      } hover:bg-gray-100 dark:hover:bg-dark-700 flex items-center`}
                    >
                      <span className="w-4 h-4 mr-2 rounded-full bg-green-500"></span>
                      Green
                    </button>
                    <button
                      onClick={() => {
                        changeColorTheme(COLOR_THEMES.ORANGE);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        colorTheme === COLOR_THEMES.ORANGE
                          ? "bg-gray-100 dark:bg-dark-700"
                          : ""
                      } hover:bg-gray-100 dark:hover:bg-dark-700 flex items-center`}
                    >
                      <span className="w-4 h-4 mr-2 rounded-full bg-orange-500"></span>
                      Orange
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Auth buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 rounded-md transition-colors duration-300"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-dark-600">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-dark-700"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200 dark:border-dark-600">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
