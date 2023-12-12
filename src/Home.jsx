import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'http://hn.algolia.com/api/v1';

const Home = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search?query=${searchQuery}`);
      setSearchResults(response.data.hits);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch(query); // Pass the query to handleSearch
    } else {
      // Clear search results if the query is empty
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="container mx-auto p-4 mt-16 pt-16">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Hacker News"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-4 border rounded w-full"
        />
      </div>

      {searchResults.length > 0 && (
        <ul className="list-disc">
          {searchResults.map((result) => (
            <li key={result.objectID} className="cursor-pointer text-blue-500">
              <Link to={`/post/${result.objectID}`}>{result.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
