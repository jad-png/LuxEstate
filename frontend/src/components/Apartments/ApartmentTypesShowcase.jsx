import React from 'react';

export function ApartmentTypesShowcase() {
  const BathIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" y1="5" x2="8" y2="7" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );

  const SquareFootageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );

  const BedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Luxury Apartments */}
        <div className="flex flex-col">
          <div className="mb-4">
            <img 
              src="/api/placeholder/600/400" 
              alt="Luxury Apartments view" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h3 className="text-xl font-medium text-center mb-6">Luxury Apartments</h3>
          
          <div className="grid grid-cols-3 divide-x border-t border-b">
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <BathIcon />
              </div>
              <span className="text-sm">2 Bathrooms</span>
            </div>
            
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <SquareFootageIcon />
              </div>
              <span className="text-sm">124 m²</span>
            </div>
            
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <BedIcon />
              </div>
              <span className="text-sm">2 Bedrooms</span>
            </div>
          </div>
        </div>

        {/* Studio Apartments */}
        <div className="flex flex-col">
          <div className="mb-4">
            <img 
              src="/api/placeholder/600/400" 
              alt="Studio Apartments view" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h3 className="text-xl font-medium text-center mb-6">Studio Apartments</h3>
          
          <div className="grid grid-cols-3 divide-x border-t border-b">
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <BathIcon />
              </div>
              <span className="text-sm">2 Bathrooms</span>
            </div>
            
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <SquareFootageIcon />
              </div>
              <span className="text-sm">189 m²</span>
            </div>
            
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <BedIcon />
              </div>
              <span className="text-sm">3 Bedrooms</span>
            </div>
          </div>
        </div>

        {/* Modern Suite */}
        <div className="flex flex-col">
          <div className="mb-4">
            <img 
              src="/api/placeholder/600/400" 
              alt="Modern Suite view" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h3 className="text-xl font-medium text-center mb-6">Modern Suite</h3>
          
          <div className="grid grid-cols-3 divide-x border-t border-b">
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <BathIcon />
              </div>
              <span className="text-sm">3 Bathrooms</span>
            </div>
            
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <SquareFootageIcon />
              </div>
              <span className="text-sm">112 m²</span>
            </div>
            
            <div className="flex flex-col items-center py-4">
              <div className="text-amber-600 mb-2">
                <BedIcon />
              </div>
              <span className="text-sm">3 Bedrooms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}