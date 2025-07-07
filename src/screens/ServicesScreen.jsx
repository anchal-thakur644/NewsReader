import React, { useState } from "react";

const ServicesScreen = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const fetchNews = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    setArticles([]);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          query
        )}&sortBy=publishedAt&apiKey=a333a22b7714410385a642fe6149e173`
      );
      const data = await response.json();

      if (data.status === "ok") {
        setArticles(data.articles);
      } else {
        setError("Something went wrong: " + data.message);
      }
    } catch (err) {
      console.log(err);
      setError("Failed to fetch news. Please try again.");
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNews();
  };

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Search Latest News Content
        </h1>
        <p className="text-gray-600">
          Use our search functionality to find the latest news on any topic.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search for news..."
            className="w-full sm:w-2/3 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </form>
      </div>

      {loading && (
        <p className="text-center text-blue-500 font-medium">Loading news...</p>
      )}
      {error && <p className="text-center text-red-500 font-medium">{error}</p>}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="rounded-md mb-4 h-48 w-full object-cover"
              />
            )}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm mb-3">
              {article.description?.slice(0, 100)}...
            </p>
            <button
              onClick={() => openModal(article)}
              className="text-blue-500 font-medium hover:underline">
              Read more →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl">
              &times;
            </button>

            {selectedArticle.urlToImage && (
              <img
                src={selectedArticle.urlToImage}
                alt={selectedArticle.title}
                className="rounded-md mb-4 w-full h-64 object-cover"
              />
            )}
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {selectedArticle.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {selectedArticle.content || selectedArticle.description}
            </p>
            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline">
              Read full article on source →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesScreen;
