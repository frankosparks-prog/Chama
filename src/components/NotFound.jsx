import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6 w-full mt-[-2rem]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-md text-gray-500 mb-8">
          It seems like you've hit a dead end.
        </p>
        <Link
          to="/"
          className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-all"
        >
          Go Back to Home
        </Link>
      </div>
      <div className="mt-12">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?uid=R144549760&ga=GA1.1.1838633775.1713893809&semt=ais_hybrid&w=740"
          alt="404 Not Found"
          className="w-72 h-auto object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

export default NotFound;
