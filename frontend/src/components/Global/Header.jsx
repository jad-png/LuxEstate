import React from 'react'
import {Link} from 'react-router'
import { MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react'

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
              <div className="h-full w-full rounded-full bg-[#f8f3e9] flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-[#e9c496]"></div>
              </div>
            </div>
            <span className="text-xl font-bold tracking-wider">LUXTOWER</span>
          </div>
  
          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-[#e9c496]">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#e9c496]">
              Building
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#e9c496]">
              Amenities
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#e9c496]">
              Apartments
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#e9c496]">
              Availability
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#e9c496]">
              Pages
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#e9c496]">
              Contact
            </Link>
          </nav>
  
          {/* CTA Button */}
          <button className="bg-[#e9a87c] hover:bg-[#d99b70] text-white px-4 py-2 text-sm font-medium transition-colors">
            SCHEDULE A VISIT
          </button>
        </div>
      </header>
    )
  }

export default Header