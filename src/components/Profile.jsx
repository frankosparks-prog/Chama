import React from "react";
import Footer from "./Footer";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-50 to-white py-12 px-4 mt-[-2rem] ">
      {/* Profile Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/images/K-logo.jpg" // you can put any placeholder image
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
          />
        </div>

        {/* Name and Email */}
        <h2 className="mt-6 text-2xl font-bold text-gray-800">John Doe</h2>
        <p className="text-gray-500 text-sm mt-1">johndoe@example.com</p>

        {/* About Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-600 mb-2">About Me</h3>
          <p className="text-gray-600 text-sm">
            Passionate member of Village Chama. Loves contributing to community projects and participating in local events.
          </p>
        </div>

        {/* Edit Profile Button */}
        <button
          className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
          disabled
        >
          Edit Profile
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
