import React from 'react'
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Link } from "react-router"

export function Footer() {
  return (
    <footer className="bg-[#2a2420] text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 relative mr-2">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-[#2a2420]"></div>
                </div>
              </div>
              <span className="text-xl font-bold tracking-wider">LUXTOWER</span>
            </div>
          </div>

          {/* Address section */}
          <div>
            <h3 className="text-sm font-medium mb-4">Address</h3>
            <address className="not-italic text-gray-400 text-sm">
              <p>Germany — 785 15h Street</p>
              <p>Office 478</p>
              <p>Berlin De 81566</p>
            </address>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-sm font-medium mb-4">Say Hello</h3>
            <p className="text-gray-400 text-sm mb-2">info@email.com</p>
            <p className="text-[#c9925e] text-lg">+1 840 841 25 69</p>
          </div>

          {/* Links section */}
          <div>
            <h3 className="text-sm font-medium mb-4">Useful Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  License
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2022 LuxTower. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Blueprint background image */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-10">
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-right-bottom"
          style={{ backgroundImage: "url('/placeholder.svg?height=300&width=400')" }}
        ></div>
      </div>
    </footer>
  )
}

export default Footer