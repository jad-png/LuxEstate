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

export function Header() {
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
        <UserDropDown />
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
