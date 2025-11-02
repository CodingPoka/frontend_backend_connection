import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MyWebsite
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your one-stop platform for professional account management.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/login"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
            <p className="text-gray-600">
              Simple and clean interface for all users, beginners or advanced.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-gray-600">
              We ensure your data is safe and privacy is our top priority.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Responsive</h3>
            <p className="text-gray-600">
              Works perfectly on mobile, tablet, and desktop screens.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-auto text-center">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
