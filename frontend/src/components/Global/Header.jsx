import React from "react";
import { Link } from "react-router";
import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  User,
} from "lucide-react";
import { SearchBar } from "./Searchbar";
import { UserDropDown } from "./UserDropdown";
import { NotificationsDropdown } from "./NotificationDropdown";
import useAuthStore from "../../stores/authStore";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="w-full bg-[#8a8170] text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>465 Zack Prairie Suite 337</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+44 123 456 7890</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-12 w-12 relative mr-2">
            {/* Logo image or whatever u choose */}
          </div>
          <span className="text-xl font-bold tracking-wider">LUXTOWER</span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-[#e9c496]">
            Home
          </Link>
          <Link
            to="/building"
            className="text-sm font-medium hover:text-[#e9c496]"
          >
            Building
          </Link>
          <Link
            to="/apartment"
            className="text-sm font-medium hover:text-[#e9c496]"
          >
            Apartments
          </Link>
          <Link
            to="/availability"
            className="text-sm font-medium hover:text-[#e9c496]"
          >
            Availability
          </Link>
          <Link to="/Blog" className="text-sm font-medium hover:text-[#e9c496]">
            Blog
          </Link>
          <Link to="/#" className="text-sm font-medium hover:text-[#e9c496]">
            Pages
          </Link>
          <Link
            to="/contact-request"
            className="text-sm font-medium hover:text-[#e9c496]"
          >
            Contact
          </Link>
        </nav>
        {/* CTA Button */}
        <button className="bg-[#e9a87c] hover:bg-[#d99b70] text-white px-4 py-2 text-sm font-medium transition-colors">
          SCHEDULE A VISIT
        </button>
        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="relative focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-[#262626]"
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
              <span className="absolute -top-1 -right-1 bg-[#a27d56] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center manrope">
                3
              </span>
            </button>
            {isDropdownOpen && <NotificationsDropdown />}
          </div>
            <UserDropDown />
        </div>
      </div>

      <div className="w-full bg-[#eae8e522] text-black px-4 py-2">
        <div className="container flex justify-center items-center">
          <div className="flex flex-grow justify-end ">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
