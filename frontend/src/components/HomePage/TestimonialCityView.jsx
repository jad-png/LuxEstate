import React from 'react';

export function TestimonialCityView() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side - City View Image */}
      <div className="w-full md:w-1/2 h-72 md:h-auth">
        <img 
          src="/api/placeholder/600/500" 
          alt="Luxury penthouse terrace with city skyline view" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right Side - Testimonial */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 md:p-32">
        <div className="max-w-md">
          <blockquote className="text-xl md:text-2xl font-light text-center mb-8">
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has".
          </blockquote>
          
          <div className="flex flex-col items-center">
            <p className="text-amber-600 font-medium mb-1">Lorem Ipsum</p>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Lorem Architecture</p>
          </div>
        </div>
      </div>
    </div>
  );
}