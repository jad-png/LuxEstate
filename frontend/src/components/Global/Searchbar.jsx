import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../../services/api";
import useDebounce from "../../stores/useDebounce";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(query, 300);

  const [error, setError] = useState(null);
  
  const fetchSuggestions = useCallback(async (query) => {
    if (!query) {
      setSuggestions([]);
      setIsDropdownOpen(false);
      return;
    }

    try {
      const response = await api.get(`/search/suggest?query=${encodeURIComponent(query)}`);
      setSuggestions(response.data);
      setIsDropdownOpen(response.data.length > 0);
    } catch (error) {
      setError("Failed to load suggestions");
      setSuggestions([]);
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    fetchSuggestions(debouncedQuery);
  }, [debouncedQuery, fetchSuggestions]);


  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (url) => {
    setQuery('');
    setSuggestions([]);
    setIsDropdownOpen(false);
    navigate(url);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery('');
      setIsDropdownOpen(false);
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto z-50" ref={dropdownRef}>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search properties, blog posts, categories..."
          className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {isDropdownOpen && (
        <ul className="absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={`${suggestion.type}-${index}`}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion.url)}
            >
              <span className="font-semibold">{suggestion.title}</span>
              <span className="text-sm text-gray-500 ml-2">
                ({suggestion.type.replace('_', ' ')})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
