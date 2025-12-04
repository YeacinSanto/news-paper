import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import Navbar from "./Navbar";

export default function CareerPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / Europe",
      type: "Full-time",
      description:
        "We are looking for a skilled Frontend Developer with experience in React, Tailwind, and modern web technologies.",
    },
    {
      title: "Backend Developer",
      location: "Remote / Europe",
      type: "Full-time",
      description:
        "Join our backend team to build robust APIs and services using Node.js, Express, and databases.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote / Europe",
      type: "Contract",
      description:
        "We need a creative UI/UX Designer to craft engaging user experiences for our platform.",
    },
  ];

  const benefits = [
    "Flexible working hours",
    "Remote-first culture",
    "Health and wellness support",
    "Learning and development opportunities",
    "Collaborative and inclusive team",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
         <div className= "p-5"><Navbar></Navbar></div>
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Join our team of passionate professionals! We are always looking for talented individuals
          who want to make an impact and grow with us.
        </p>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-500 mb-1">{job.location}</p>
                <p className="text-gray-500 mb-3">{job.type}</p>
                <p className="text-gray-700">{job.description}</p>
              </div>
              <button className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Apply Now <FaRegPaperPlane />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Work With Us</h2>
        <ul className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="bg-white p-4 rounded-xl shadow flex items-center justify-center"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Join Us?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          If you’re passionate about making a difference, we’d love to hear from you. Explore our
          open positions and apply today!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          View All Openings
        </button>
      </section>
    </div>
  );
}
