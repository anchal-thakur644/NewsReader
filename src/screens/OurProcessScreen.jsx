import ArticleIcon from "@mui/icons-material/Article";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const processSteps = [
  {
    title: "1. News Collection",
    icon: <SearchIcon className="text-blue-600" style={{ fontSize: "40px" }} />,
    description:
      "We fetch the latest news articles from reliable sources using public APIs and ensure real-time updates.",
  },
  {
    title: "2. Smart Filtering",
    icon: (
      <FilterAltIcon className="text-green-600" style={{ fontSize: "40px" }} />
    ),
    description:
      "Articles are filtered based on categories, regions, and keywords to deliver the most relevant content.",
  },
  {
    title: "3. Seamless Display",
    icon: (
      <ArticleIcon className="text-purple-600" style={{ fontSize: "40px" }} />
    ),
    description:
      "Our clean, user-friendly UI helps you read and browse news effortlessly across devices.",
  },
];

const OurProcessScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold text-blue-500">News Reader</span>,
          we follow a seamless 3-step approach to deliver accurate and timely
          news to your screen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center transition-transform hover:scale-105 duration-300">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          Built with ❤️ using React, Vite, Tailwind CSS & MUI Icons
        </p>
      </div>
    </div>
  );
};

export default OurProcessScreen;
