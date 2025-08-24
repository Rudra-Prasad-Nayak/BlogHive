import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Logout() {
  const [isLoggingOut, setIsLoggingOut] = useState(true);

  useEffect(() => {
    // In a real application, you would call an API to invalidate the session/token
    // For now, we'll just simulate a logout process with a timeout
    const logoutUser = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Clear any auth tokens from localStorage
        localStorage.removeItem("authToken");

        console.log("User logged out successfully");
      } catch (error) {
        console.error("Logout failed", error);
      } finally {
        setIsLoggingOut(false);
      }
    };

    logoutUser();
  }, []);

  if (!isLoggingOut) {
    // Redirect to home page after logout
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-lg text-center">
        <svg
          className="animate-spin h-10 w-10 text-primary-600 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Logging out...
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Please wait while we securely log you out.
        </p>
      </div>
    </div>
  );
}

export default Logout;
