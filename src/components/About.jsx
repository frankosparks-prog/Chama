import React from "react";
import { Link } from "react-router-dom";
import { Handshake, BarChart, Briefcase } from "lucide-react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-x-hidden mt-[-1.9rem]">
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-green-50 ">
        <div className="absolute inset-0">
          <img
            src="/images/K-logo.jpg"
            alt="Community Background"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light mb-3 animate-fadeIn">
            Welcome to Our Community
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-fadeInDelay">
            About Us
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-10 animate-fadeInDelay2 px-2">
            We are a community driven by passion, unity, and the desire to make a difference.
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <section className="w-full py-20 bg-white px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-green-700 animate-fadeIn">
            What We Stand For
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fadeInDelay">
            Our community, Chama, is a place where dreams are nurtured, friendships are forged, and opportunities are created. We focus on growth, collaboration, and making a meaningful impact in the lives of every member.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Unity */}
            <div className="bg-green-50 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center animate-fadeInDelay4">
              <Handshake size={48} className="text-green-700 mb-4 mx-auto"/>
              <h3 className="text-xl font-bold text-green-800 mb-1">Unity</h3>
              <p className="text-gray-600 text-sm">
                We believe in the power of coming together as one to achieve greatness.
              </p>
            </div>

            {/* Growth */}
            <div className="bg-green-50 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center animate-fadeInDelay5">
              <BarChart size={48} className="text-green-700 mb-4 mx-auto"/>
              <h3 className="text-xl font-bold text-green-800 mb-1">Growth</h3>
              <p className="text-gray-600 text-sm">
                Continuous growth is at the heart of what we do, individually and as a group.
              </p>
            </div>

            {/* Opportunities */}
            <div className="bg-green-50 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center animate-fadeInDelay6">
              <Briefcase size={48} className="text-green-700 mb-4 mx-auto"/>
              <h3 className="text-xl font-bold text-green-800 mb-1">Opportunities</h3>
              <p className="text-gray-600 text-sm">
                We create opportunities for each other to succeed and excel.
              </p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-16 text-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 text-lg animate-bounce"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
