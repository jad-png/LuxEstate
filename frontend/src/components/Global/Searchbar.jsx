import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import debounce from 'lodash/debounce';
import api from "../../services/api";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  
  const fetchSuggestions = debounce(async (query) => {
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
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  
  return (
    <div className="flex items-center space-x-2 w-2/3">
      <input
        type="text"
        placeholder="Search for anything..."
        className="w-full max-w-md p-2 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
      />
      <button className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]">
        Search
      </button>
    </div>
  );
}
