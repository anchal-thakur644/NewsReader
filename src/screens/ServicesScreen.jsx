import React, { useState } from "react";

const ServicesScreen = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError("");
    setArticles([]);

    try {
      const url = `https://newsdata.io/api/1/news?q=${encodeURIComponent(
        query
      )}&language=en&apikey=pub_3a5cc48a1d63463986b1debeb62d863e`;

      const res = await fetch(url);
      const json = await res.json();

      if (
        json.status !== "success" ||
        !json.results ||
        json.results.length === 0
      ) {
        setError("No results found.");
      } else {
        setArticles(json.results);
      }
    } catch (e) {
      console.error("Fetch error:", e);
      setError("Failed to fetch news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNews();
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">News Search</h1>
        <p className="text-gray-600">
          Search the latest news using Newsdata.io — free and fast.
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
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="rounded-md mb-4 h-48 w-full object-cover"
              />
            )}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-500 text-sm mb-1">
              {new Date(article.pubDate).toLocaleString()}
            </p>
            <p className="text-gray-700 text-sm mb-3">
              {article.description?.slice(0, 100)}...
            </p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline">
              Read full story →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesScreen;
