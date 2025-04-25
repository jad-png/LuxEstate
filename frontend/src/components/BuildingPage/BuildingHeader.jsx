import React from 'react';

export function BuildingHeader() {
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
          backgroundImage: "url('https://cdn.pixabay.com/photo/2018/03/20/17/35/furniture-3243991_1280.jpg')",
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Building</h1>
        
        {/* Breadcrumb navigation */}
        <nav className="text-sm">
          <ol className="flex items-center text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="mx-2">›</li>
            <li className="text-white">Building</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}