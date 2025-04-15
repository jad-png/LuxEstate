import React from 'react';

export function AmenitiesSection() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side - Amenities List */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex items-center">
        <div className="w-full max-w-md mx-auto">
          {/* Restaurant Amenity */}
          <div className="flex mb-12">
            <div className="mr-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8C13.1046 8 14 7.10457 14 6M12 16C13.1046 16 14 16.8954 14 18M8 10H16M8 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Restaurant</h3>
              <p className="text-sm text-gray-600">Convenient in-house amenities, staff and services elevate the living experience.</p>
            </div>
          </div>

          {/* Shopping/Mall Amenity */}
          <div className="flex mb-12">
            <div className="mr-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Shopping Mall</h3>
              <p className="text-sm text-gray-600">The building's personalized services and carefully curated amenities.</p>
            </div>
          </div>

          {/* Fitness Center Amenity */}
          <div className="flex">
            <div className="mr-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H4M20 12H18M8 5L6 7M18 7L16 5M8 19L6 17M18 17L16 19M12 4V6M12 18V20M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Fitness Center</h3>
              <p className="text-sm text-gray-600">Nothing works better to help you work out like links that in a quick session.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          src="/api/placeholder/600/600" 
          alt="Modern luxury common area with wood paneling, dining table and large windows" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}