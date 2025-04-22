import React from 'react';

export function ApartmentsShowcase() {
//   const icons = {
//     bathroom: (
//       <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect x="4" y="10" width="16" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M4 17L4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V17" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M8 10V6C8 5.44772 8.44772 5 9 5H11C11.5523 5 12 5.44772 12 6V10" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     area: (
//       <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M4 4L20 20" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     ),
//     bedroom: (
//       <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M4 16V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V16" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M2 16H22V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V16Z" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M7 9H17V13H7V9Z" stroke="currentColor" strokeWidth="1.5"/>
//       </svg>
//     )
//   };

  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      
      {/* Background Pattern Elements - Subtle Luxury Icons */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute -top-20 -left-20 w-72 h-72 border-8 border-gray-200 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-gray-200 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amber-500 text-sm uppercase tracking-wider mb-2">Apartments</p>
          <h2 className="text-3xl md:text-4xl font-medium">Our Apartments</h2>
        </div>

        {/* Apartment Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col">
              {/* Apartment Image */}
              <div className="h-56 md:h-64 mb-4">
                <img 
                  src='https://demo2.pavothemes.com/luxtower/wp-content/uploads/2022/01/apartment-5-820x580.jpg'
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Apartment Type */}
              <h3 className="text-center text-lg font-medium mb-6"></h3>
              
              {/* Specifications */}
              <div className="flex justify-center space-x-4 mt-auto">
                  <div  className="flex flex-col items-center">
                    <div className="w-12 h-12 border border-gray-200 flex items-center justify-center mb-2">
                    </div>
                    <span className="text-xs text-gray-600"></span>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}