import React, { useState } from "react";
import { Link } from "react-router";
import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X
} from "lucide-react";
import { SearchBar } from "./Searchbar";
import { UserDropDown } from "./UserDropdown";
import { NotificationsDropdown } from "./NotificationDropdown";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="w-full bg-[#8a8170] text-white px-4 py-2">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-6 text-xs sm:text-sm mb-2 sm:mb-0">
            <div className="flex items-center">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">465 Zack Prairie Suite 337</span>
              <span className="sm:hidden">465 Zack Prairie</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span>+44 123 456 7890</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-8 w-8 sm:h-12 sm:w-12 relative mr-2">
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-wider">LUXTOWER</span>
        </div>

        {/* Burger Menu Button - Visible on mobile */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6 z-50" />
          )}
        </button>

        <nav className={`
          absolute left-0 right-0 top-full z-50 bg-white shadow-lg md:shadow-none
          md:relative md:flex md:items-center md:space-x-6 md:bg-transparent
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'block' : 'hidden md:flex'}
        `}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 px-4 py-2 md:p-0">
            <Link to="/" className="py-2 md:py-0 text-sm font-medium hover:text-[#e9c496] border-b md:border-b-0 border-gray-100">
              Home
            </Link>
            <Link to="/building" className="py-2 md:py-0 text-sm font-medium hover:text-[#e9c496] border-b md:border-b-0 border-gray-100">
              Building
            </Link>
            <Link to="/apartment" className="py-2 md:py-0 text-sm font-medium hover:text-[#e9c496] border-b md:border-b-0 border-gray-100">
              Apartments
            </Link>
            <Link to="/availability" className="py-2 md:py-0 text-sm font-medium hover:text-[#e9c496] border-b md:border-b-0 border-gray-100">
              Availability
            </Link>
            <Link to="/Blog" className="py-2 md:py-0 text-sm font-medium hover:text-[#e9c496] border-b md:border-b-0 border-gray-100">
              Blog
            </Link>
            <Link to="/contact" className="py-2 md:py-0 text-sm font-medium hover:text-[#e9c496]">
              Contact
            </Link>
          </div>
        </nav>

        {/* Right side controls */}
        <div className="md:flex items-center gap-2 sm:gap-6">
          
          {/* Notification */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="relative focus:outline-none"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#262626]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 bg-[#a27d56] text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center manrope">
                3
              </span>
            </button>
            {isDropdownOpen && <NotificationsDropdown />}
          </div>
          
          {/* User dropdown */}
          <UserDropDown />
        </div>
      </div>

      {/* Search bar */}
      <div className="w-full bg-[#eae8e522] text-black px-4 py-2">
        <div className="container flex justify-center items-center">
          <div className="flex flex-grow justify-end">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;