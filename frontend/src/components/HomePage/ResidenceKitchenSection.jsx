import React from 'react';

export function ResidenceKitchenSection() {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Left Image - Living Room */}
      <div className="w-full md:w-3/5 h-96 md:h-auto relative">
        <img 
          src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/apartment-5.jpg" 
          alt="Luxury condominium living room with panoramic city views" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Column with Residences Header and Kitchen Feature */}
      <div className="w-full md:w-2/5 flex flex-col">
        {/* Residences Header Section */}
        <div className="p-6 md:p-8 bg-white">
          <div className="w-10 h-0.5 bg-neutral-400 mb-4"></div>
          <h2 className="text-2xl font-medium text-neutral-900 mb-3">Residences</h2>
          <p className="text-sm text-neutral-600">
            Spacious light-filled condominium residences with panoramic views. An architectural wonder designed flawlessly.
          </p>
        </div>

        {/* Kitchen Feature Section */}
        <div className="flex flex-col bg-amber-400">
          <div className="p-6 md:p-8 bg-neutral-400">
            <div className="uppercase text-xs tracking-wider text-neutral-600 mb-2">
              Perfect & Bright
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Kitchen</h3>
            <p className="text-xs text-white">
              Lofty ceilings, plentiful light, and large windows framed by pillars create an open-plan room that is a masterpiece.
            </p>
          </div>
          
          {/* Kitchen Image */}
          <div className="h-48 md:h-56 relative">
            <img 
              src="https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/h4-gallery2.jpg " 
              alt="Modern kitchen with wooden cabinetry and floor-to-ceiling windows" 
              className="w-full h-full object-cover"
            />
            <div className="absolute right-4 bottom-4 w-2 h-2 rounded-full bg-amber-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}