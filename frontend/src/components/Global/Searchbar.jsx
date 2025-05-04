import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
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
