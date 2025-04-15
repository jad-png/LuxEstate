import React from 'react';

export function IntroSection() {
  return (
    <div className="flex flex-col md:flex-row bg-neutral-900 text-white">
      {/* Left Content Section */}
      <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3">Welcome Home</p>
          
          <h1 className="text-3xl md:text-4xl font-medium mb-6">
            The Building You Never Need To Leave
          </h1>
          
          <p className="text-sm text-neutral-300 mb-8">
            Featuring a refined palette of natural materials, the socializing spaces are strategically positioned to the soaring high-rise units. All feature windows. Custom herringbone floors employed, selected everything is meticulously tailored.
          </p>
          
          <p className="text-sm text-neutral-300 mb-10">
            The design for Luxtower came from looking at the city's existing buildings and thinking about which ones you might want to live in, not just look at.
          </p>
          
          <button className="border border-neutral-400 text-xs px-5 py-2 tracking-wider uppercase">
            See Residences
          </button>
        </div>
      </div>
      
      {/* Right Images Grid */}
      <div className="w-full md:w-3/5 grid grid-cols-2 grid-rows-2 gap-2 p-2">
        {/* Top Left Image - Building Exterior */}
        <div className="col-span-1 row-span-2 bg-amber-500">
          <img 
            src="/api/placeholder/300/600" 
            alt="Modern luxury building exterior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Top Right Image - Building Detail */}
        <div className="col-span-1 row-span-1 bg-neutral-200">
          <img 
            src="/api/placeholder/300/250" 
            alt="Building architectural detail" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Bottom Right Image - City View */}
        <div className="col-span-1 row-span-1 bg-neutral-700">
          <img 
            src="/api/placeholder/300/250" 
            alt="City skyline view from building" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
