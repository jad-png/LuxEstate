import React from 'react';
import { motion } from "framer-motion";

export function AmenitiesSection() {
  return (
    <div className="flex flex-col bg-[#FAF6F3]">
      {/* Header */}
      <div className="text-center m-10">
        <p className="text-amber-500 text-sm uppercase tracking-wider mb-2">Amenities</p>
        <h2 className="text-3xl md:text-4xl font-medium">Our Apartments amenities</h2>
      </div>

      {/* Main Content: Amenities List and Image */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Amenities List */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center bg-gray-850">
          <div className="w-full max-w-md mx-auto space-y-12">
            {/* Restaurant Amenity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex group"
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-[#E0DCD5] rounded-full flex items-center justify-center group-hover:bg-gray-500 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8C13.1046 8 14 7.10457 14 6M12 16C13.1046 16 14 16.8954 14 18M8 10H16M8 14H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1 text-black">Restaurant</h3>
                <p className="text-sm text-gray-800">
                  Convenient in-house amenities, staff and services elevate the living experience.
                </p>
              </div>
            </motion.div>

            {/* Shopping/Mall Amenity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex group"
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-[#E0DCD5] rounded-full flex items-center justify-center group-hover:bg-gray-500 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1 text-black">Shopping Mall</h3>
                <p className="text-sm text-gray-800">
                  The building's personalized services and carefully curated amenities.
                </p>
              </div>
            </motion.div>

            {/* Fitness Center Amenity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex group"
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-[#E0DCD5] rounded-full flex items-center justify-center group-hover:bg-gray-500 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H4M20 12H18M8 5L6 7M18 7L16 5M8 19L6 17M18 17L16 19M12 4V6M12 18V20M7 12H17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1 text-black">Fitness Center</h3>
                <p className="text-sm text-gray-800">
                  Nothing works better to help you work out like links that in a quick session.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-64 md:h-auto"
        >
          <img
            src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/apartment-9.jpg"
            alt="Modern luxury common area with wood paneling, dining table and large windows"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}