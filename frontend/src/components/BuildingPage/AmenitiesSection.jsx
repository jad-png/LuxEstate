import React from 'react';
import { Square, Diamond, Zap } from 'lucide-react';

export function AmenitiesSection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Amenities Column */}
        <div className="flex flex-col items-center text-center">
          <div className="p-4 border border-gray-200 rounded-md mb-4">
            <Square size={24} className="text-gray-700" />
          </div>
          <h3 className="font-medium mb-3">Amenities</h3>
          <p className="text-sm text-gray-500">
            This building offers multiple types of distinctive packages in harmony with the common amenities for residents.
          </p>
        </div>

        {/* Luxury Column */}
        <div className="flex flex-col items-center text-center">
          <div className="p-4 border border-gray-200 rounded-md mb-4">
            <Diamond size={24} className="text-gray-700" />
          </div>
          <h3 className="font-medium mb-3">Luxury</h3>
          <p className="text-sm text-gray-500">
            This building offers multiple types of distinctive packages in harmony with the common amenities for residents.
          </p>
        </div>

        {/* Energy Column */}
        <div className="flex flex-col items-center text-center">
          <div className="p-4 border border-gray-200 rounded-md mb-4">
            <Zap size={24} className="text-gray-700" />
          </div>
          <h3 className="font-medium mb-3">Energy</h3>
          <p className="text-sm text-gray-500">
            This building offers multiple types of distinctive packages in harmony with the common amenities for residents.
          </p>
        </div>
      </div>
    </section>
  );
}