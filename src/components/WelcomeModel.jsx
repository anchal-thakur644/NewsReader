import React, { useState } from "react";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
        </button>
        <h2 className="text-2xl font-semibold mb-2">Welcome to NewsReader</h2>
        <p className="text-gray-600 mb-4">
          Stay informed with the latest headlines from around the world. Explore
          curated articles and breaking news.
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
};

export default WelcomeModal;
