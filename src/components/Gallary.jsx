import React, { useEffect, useState, useRef } from "react";
import Footer from "./Footer";

// Predefined gallery images
const predefinedImages = [
  "https://picsum.photos/400/250?random=1",
  "https://picsum.photos/400/250?random=2",
  "https://picsum.photos/400/250?random=3",
  "https://picsum.photos/400/250?random=4",
  "https://picsum.photos/400/250?random=5",
  "https://picsum.photos/400/250?random=6",
  "https://picsum.photos/400/250?random=7",
  "https://picsum.photos/400/250?random=8",
];

function Gallery() {
  const [visibleImages, setVisibleImages] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Use predefined images
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleImages((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
          Gallery
        </h1>
        <p className="text-gray-600 text-md md:text-lg">
          A collection of our cherished moments.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {predefinedImages.map((image, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500
              ${visibleImages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-400 text-sm mt-16">
        <p>Enjoy browsing through our beautiful moments! 📸✨</p>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
