import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
