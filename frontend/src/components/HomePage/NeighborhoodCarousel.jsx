import React from 'react';

export function NeighborhoodCarousel() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Heading */}
        <div>
          <p className="text-amber-600 text-sm uppercase tracking-wider mb-2">Neighborhood</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            The Best Of City Is Right<br />Outside Your Doors
          </h2>
        </div>
        
        {/* Right Column - Description */}
        <div className="flex items-center">
          <p className="text-gray-600 text-sm">
            Your neighborhood across just happens to be New York's greatest cultural institutions, bustling fashionable shops, and its finest restaurants.
          </p>
        </div>
      </div>
      
      {/* Image Carousel */}
      <div className="relative">
        {/* Carousel Images */}
        <div className="flex overflow-hidden gap-2">
          {/* First Image - City Avenue with Trees */}
          <div className="w-1/3 flex-shrink-0">
            <img 
              src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2024/08/neighborhood-3.jpg" 
              alt="City avenue with tall buildings and trees" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Second Image - Historic Corner Building */}
          <div className="w-1/3 flex-shrink-0">
            <img 
              src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2024/08/neighborhood-1.jpg" 
              alt="Historic corner building in neighborhood" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Third Image - Tree-lined Street with Tram */}
          <div className="w-1/3 flex-shrink-0">
            <img 
              src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2024/08/neighborhood-2.jpg" 
              alt="Tree-lined street with tram in autumn" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        
        {/* Carousel Controls - Static */}
        {/* <div className="flex justify-start mt-6">
          <button className="w-8 h-8 border border-gray-300 flex items-center justify-center mr-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="w-8 h-8 border border-gray-300 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}