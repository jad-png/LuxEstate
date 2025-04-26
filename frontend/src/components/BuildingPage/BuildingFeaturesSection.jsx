import React from 'react';

export function BuildingFeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto">
      {/* Skyline and Park Views Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Image */}
        <div className="lg:w-3/5">
          <img 
            src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/About_BG_9.jpg" 
            alt="Rooftop terrace with dining area and city skyline views" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right side - Content */}
        <div className="lg:w-2/5 bg-gray-50 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Skyline And Park Views</h2>
          <p className="text-gray-600 mb-6">
            Spectacular views of the skyline and the nearby park offer additional breathing space, while the outdoor terrace allows further connections to your home.
          </p>
          <p className="text-gray-600">
            Panoramic light-filled architecture creates airy, urban experiences ready to welcome memorable conversations and social gatherings.
          </p>
        </div>
      </div>

      {/* Welcome Arrival Section - Reversed layout */}
      <div className="flex flex-col lg:flex-row-reverse">
        {/* Right side - Image */}
        <div className="lg:w-3/5">
          <img 
            src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/About_BG_11.jpg" 
            alt="Modern lobby entrance with stylish furniture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Left side - Content */}
        <div className="lg:w-2/5 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">A Welcome Arrival</h2>
          <p className="text-gray-600 mb-6">
            The entry leads way to all that this building's experience is crafted around and centered. Everything from the dazzling facade materials to the gleaming interior details aligns with one comprehensive architectural vision and scope.
          </p>
          <p className="text-gray-600">
            Your comfort is home.
          </p>
        </div>
      </div>
    </section>
  );
}