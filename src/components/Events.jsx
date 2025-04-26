import React, { useEffect, useState, useRef } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Footer from "./Footer";

// Fake Events Data with random image URLs
const events = [
  {
    title: "Annual General Meeting",
    date: "June 15, 2025",
    location: "Village Chama Hall",
    description: "Join us for our Annual General Meeting to discuss key achievements, financials, and future plans.",
    image: "https://picsum.photos/400/250?random=1", // Random image from Lorem Picsum
  },
  {
    title: "Fundraising Gala",
    date: "August 10, 2025",
    location: "Chama Gardens",
    description: "A grand night to support our community projects. Dress code: Elegant!",
    image: "https://picsum.photos/400/250?random=2", // Random image from Lorem Picsum
  },
  {
    title: "Youth Mentorship Workshop",
    date: "September 5, 2025",
    location: "Community Center",
    description: "Empowering our youth with knowledge and skills for the future.",
    image: "https://picsum.photos/400/250?random=3", // Random image from Lorem Picsum
  },
  {
    title: "Community Clean-Up Day",
    date: "October 12, 2025",
    location: "Village Square",
    description: "Let’s come together to clean and beautify our neighborhood!",
    image: "https://picsum.photos/400/250?random=4", // Random image from Lorem Picsum
  },
  {
    title: "End Year Celebration",
    date: "December 20, 2025",
    location: "Chama Clubhouse",
    description: "Celebrate the year’s achievements with music, food, and fun!",
    image: "https://picsum.photos/400/250?random=5", // Random image from Lorem Picsum
  },
];

function Events() {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const eventRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleEvents((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    eventRefs.current.forEach((event) => {
      if (event) observer.observe(event);
    });

    return () => {
      eventRefs.current.forEach((event) => {
        if (event) observer.unobserve(event);
      });
    };
  }, []);

  return (
    <div className="cont">
      
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 mt-[-2rem]">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
          Upcoming Events
        </h1>
        <p className="text-gray-600 text-md md:text-lg">
          Stay connected. Stay inspired. Join us!
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (eventRefs.current[index] = el)}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden
              ${visibleEvents.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-700 mb-2">{event.title}</h2>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <CalendarDays size={16} /> {event.date}
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <MapPin size={16} /> {event.location}
              </div>
              <p className="text-gray-600 text-sm">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-400 text-sm mt-16">
        <p>Mark your calendar and be part of our amazing journey! 📅✨</p>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
