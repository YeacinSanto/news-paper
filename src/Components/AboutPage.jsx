import React from "react";
import Navbar from "./Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
        <div className= "p-5"><Navbar></Navbar></div>
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Welcome to our platform! We are passionate about delivering high-quality content and
          connecting people with innovative solutions.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Mission & Vision</h2>
        <div className="md:flex md:justify-center md:gap-16">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              To empower users with reliable information and innovative tools that make their
              life easier.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              To be the leading platform for intelligent solutions, connecting communities through
              technology and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Interested in collaborating or learning more about what we do? Reach out and let's build
          something amazing together!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
