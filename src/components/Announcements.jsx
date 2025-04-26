import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Announcements = () => {
  const announcements = [
    { title: "New Event: Annual Meet-up", date: "April 30, 2025", description: "Join us for the annual meet-up and networking event with the community." },
    { title: "Scholarship Opportunities Open", date: "April 25, 2025", description: "Apply for the new scholarship program designed to support your education." },
    { title: "Job Board Updates", date: "April 20, 2025", description: "Check out the latest job postings and opportunities from top companies." },
    { title: "Community Fundraiser", date: "April 15, 2025", description: "Help us reach our fundraising goal and contribute to our next project." }
  ];

  return (
    <div className="relative overflow-x-hidden mt-[-1.9rem]">

      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-green-50">
        <div className="absolute inset-0">
          <img
            src="/images/K-logo.jpg"
            alt="Community Background"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light mb-3 animate-fadeIn">
            Stay Updated with Our Announcements
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-fadeInDelay">
            Announcements
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-10 animate-fadeInDelay2 px-2">
            Stay in the loop with our latest community updates and important notices.
          </p>
        </div>
      </div>

      {/* Announcements List */}
      <section className="w-full py-20 bg-white px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-green-700 animate-fadeInDelay3">
            Recent Announcements
          </h2>

          <div className="space-y-10">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-green-50 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-left animate-fadeInDelay4"
              >
                <h3 className="text-2xl font-bold text-green-800 mb-2">{announcement.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{announcement.date}</p>
                <p className="text-gray-700 text-base">{announcement.description}</p>
              </div>
            ))}
          </div>
          
          {/* Call-to-Action Button */}
          <div className="mt-16 text-center animate-fadeInDelay5">
            <Link
              to="/"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 text-lg animate-bounce"
            >
              View All Announcements
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Announcements;
