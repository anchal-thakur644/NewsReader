import React, { useState } from "react";

function WelcomeModel() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        ></button>
        <h1 className="text-4xl font-semibold text-blue-600 mb-4">
          Welcome to News Reader
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Stay updated with the latest news from around the world.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default WelcomeModel;
