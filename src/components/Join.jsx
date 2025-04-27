// src/Join.js
import React, { useState } from "react";
import Footer from "./Footer";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Later: send this data to your backend or database
    alert("Thank you for applying to join Kiti! 🎉");
    setFormData({ name: "", email: "", reason: "" }); // Clear form
  };

  return (
    <div className="cont">
      <div className="flex items-center justify-center bg-green-50 p-6 mt-[-2rem]">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">
            Become a Member 🌟
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
              />
            </div>

            {/* Reason Field */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Why do you want to join?
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Tell us why you would like to be part of Kiti"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Apply Now 🚀
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Join;
