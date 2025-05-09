import React from 'react';

export function ApartmentsHeader() {
  return (
    <div className="relative w-full h-64">
      {/* Dark overlay for text visibility */}
      <div 
        className="absolute inset-0 bg-black/40 z-10"
        aria-hidden="true"
      ></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2022/05/22/17/22/building-7214070_960_720.jpg')",
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Apartments</h1>
        
        {/* Breadcrumb navigation */}
        <nav className="text-sm">
          <ol className="flex items-center text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="mx-2">›</li>
            <li className="text-white">Apartments</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}