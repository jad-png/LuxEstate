import React from 'react';

export function LandmarkStyleSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-wider text-orange-500 mb-2">ARCHITECTURE</p>
        <h2 className="text-3xl font-bold mb-4">Landmark Style Reinvented</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          This landmark project reinterprets modernist design elements and creates spaces with a balance between living with luxurious flow. It has opportunities. Defined by its high-quality and architectural elements with functioning architectural details inside, and urban layout inspired by sport and relaxation - all on a deep floor.
        </p>
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* First Row */}
        <div className="relative">
          <img 
            src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/About_BG_5.jpg" 
            alt="Iconic view of city skyline" 
            className="w-full h-64 object-cover"
          />
          <p className="text-xs text-gray-500 mt-2">AN ICONIC NEW ADDITION TO THE WORLD'S MOST BEAUTIFUL SKYLINE</p>
        </div>
        
        <div className="relative">
          <img 
            src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/About_BG_6.jpg" 
            alt="Glass panels against the city" 
            className="w-full h-64 object-cover"
          />
          <p className="text-xs text-gray-500 mt-2">GLASS PANELS AGAINST THE LIGHT OF THE DAY</p>
        </div>

        {/* Second Row */}
        <div className="relative">
          <img 
            src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/About_BG_7.jpg" 
            alt="Illuminated storefront at night" 
            className="w-full h-64 object-cover"
          />
          <p className="text-xs text-gray-500 mt-2">THE LUXURY LIT UP INTERPLAY OF METAL, STONE, AND GLASS</p>
        </div>
        
        <div className="relative">
          <img 
            src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/About_BG_8.jpg" 
            alt="Modern reception area" 
            className="w-full h-64 object-cover"
          />
          <p className="text-xs text-gray-500 mt-2">SOFT LIGHTING CREATES A TRANQUIL WELCOME</p>
        </div>
      </div>
    </section>
  );
}