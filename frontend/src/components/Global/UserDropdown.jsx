import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { User } from "lucide-react";
import useAuthStore from "../../stores/authStore";

export function UserDropDown() {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    navigate("/login"); // Ensure navigation to /login
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // If user is null, render a minimal version or redirect to login
  if (!user) {
    return (
      <div className="relative">
        <Link to="/login" className="relative focus:outline-none" aria-label="Login">
          <User className="w-5 h-5 text-[#262626]" />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="relative focus:outline-none"
        aria-label="User menu"
        aria-expanded={isOpen}
        aria-controls="user-dropdown"
      >
        <User className="w-5 h-5 text-[#262626]" />
      </button>

      {isOpen && (
        <div id="user-dropdown" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-2">
          <div className="px-4 py-2 text-sm font-medium text-gray-800 border-b border-gray-100">
            {user.name || "User"}
          </div>
          <Link
            to="/favorites"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Favorites
          </Link>
          <Link
            to="/my-profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropDown;