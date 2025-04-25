import React from 'react';

export function BlogHeader() {
  return (
    <div className="relative w-full h-64">
      <div 
        className="absolute inset-0 bg-black/40 z-10"
        aria-hidden="true"
      ></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2021/11/13/19/27/architecture-6792169_1280.jpg')",
        }}
      ></div>
      
      <div className="relative z-20 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Our Blog</h1>
        
        <nav className="text-sm">
          <ol className="flex items-center text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="mx-2">›</li>
            <li className="text-white">Blog</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}