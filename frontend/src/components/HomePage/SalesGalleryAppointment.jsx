import React from 'react';

export function SalesGalleryAppointment() {
  return (
    <div className="w-full py-36 px-4 bg-gradient-to-r from-stone-500 to-amber-600">
      <div className="max-w-2xl mx-auto text-center text-white">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider mb-4">Enquiry</p>
          <h2 className="text-3xl md:text-4xl font-light">
            Sales Gallery Is Now Open For<br />
            Private Appointments
          </h2>
        </div>
        
        {/* Contact Form */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Name Field */}
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Name *"
              className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
            />
          </div>
          
          {/* Phone Field */}
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Phone number"
              className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
            />
          </div>
          
          {/* Email Field */}
          <div className="flex-1">
            <input 
              type="email" 
              placeholder="Email Address *"
              className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
            />
          </div>
          
          {/* Submit Button */}
          <div>
            <button 
              className="w-full md:w-auto bg-white text-stone-700 py-2 px-6 text-sm uppercase tracking-wider"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}