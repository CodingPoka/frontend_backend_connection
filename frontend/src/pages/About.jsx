import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Learn more about our mission, vision, and the team behind
          MyWebsite. We are dedicated to providing the best experience for our users.
        </p>
      </section>

      {/* About Info Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At MyWebsite, our mission is to provide a secure, responsive, and
              user-friendly platform where everyone can manage their accounts
              efficiently. We aim to combine simplicity with functionality,
              giving users a seamless experience across all devices.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to be a trusted platform globally, making account
              management intuitive, accessible, and professional for everyone.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
              alt="Team working"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Team member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <img
              src="https://randomuser.me/api/portraits/men/54.jpg"
              alt="Team member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Mark Wilson</h3>
            <p className="text-gray-600">Lead Developer</p>
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

export default About;
