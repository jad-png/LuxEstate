import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../stores/authStore";

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="bg-white border-b border-[#e5e5e5] p-4 flex justify-end items-center fixed top-0 left-64 right-0 z-10">
      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="w-10 h-10 bg-[#e5e5e5] rounded-full flex items-center justify-center text-[#666666] manrope text-sm">
            A
          </div>
          <span className="ml-2 text-[#262626] manrope font-semibold">Admin</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 ml-1 text-[#666666] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 top-12 mt-2 w-48 bg-white border border-[#e5e5e5] rounded-md shadow-lg py-1 z-20">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-[#666666] hover:bg-[#f8f3e9] transition-colors duration-150"
            >
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </div>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}