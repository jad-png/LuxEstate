import React from 'react';
import { Phone } from 'lucide-react';

export function ToursContactSection() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-xl md:text-2xl font-medium mb-2">
        In-Person & Virtual Tours Of Our Model Residences
      </h2>
      <p className="text-lg mb-6">
        Available By Appointment. Please Contact
      </p>
      
      <a 
        href="mailto:info@landmark.com" 
        className="text-[#6f4a32] font-medium hover:text-amber-700 transition-colors block mb-4"
      >
        info@landmark.com
      </a>
      
      <div className="inline-flex items-center justify-center border-b-2 border-[#ae7752] px-4">
        <a 
          href="tel:+12125556789" 
          className="text-[#6f4a32] hover:text-amber-700 transition-colors"
        >
          +1 212-555-6789
        </a>
      </div>
    </section>
  );
}