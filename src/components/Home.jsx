import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Footer from "./Footer";

const Home = () => {
  const [greeting, setGreeting] = useState("");
  const [visibleCards, setVisibleCards] = useState([]); // New state for animations

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  // Members data with image URLs
  const members = [
    {
      name: "Alice Mwangi",
      role: "Chairperson",
      message: "Leading with passion and unity!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Brian Otieno",
      role: "Treasurer",
      message: "Guarding our dreams, one shilling at a time!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Cynthia Wanjiku",
      role: "Member",
      message: "Together we grow stronger!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Daniel Kiptoo",
      role: "Secretary",
      message: "Keeping us organized and connected!",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ];

  // Refs for each member card
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.3, // How much of the card needs to be visible
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-x-hidden mt-[-1.9rem]">
      
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-light mb-3 animate-fadeIn">
            {greeting} 🌟
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-fadeInDelay">
            Welcome to Chama!
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-10 animate-fadeInDelay2 px-2">
            Building dreams together, one contribution at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contributions"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 animate-bounce"
            >
              View Contributions
            </Link>
            <Link
              to="/events"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 animate-bounce"
            >
              See Events
            </Link>
          </div>

          <div className="mt-16 text-sm sm:text-base md:text-lg text-gray-300 italic px-2">
            "Unity is strength. When we work together, magic happens."
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex justify-center w-full animate-bounce-slow">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </div>

      {/* Members Section */}
      <section className="w-full py-20 bg-white px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700 animate-fadeIn">
          Meet Our Amazing Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-green-50 p-6 rounded-2xl shadow-lg text-center transition-all duration-700 ease-out transform
                ${visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-green-300"
              />
              <h3 className="text-xl font-bold text-green-800 mb-1">{member.name}</h3>
              <p className="text-green-600 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm italic">"{member.message}"</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/join"
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 text-lg animate-bounce"
          >
            Become a Member 🚀
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
