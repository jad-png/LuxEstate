import React from 'react';

export function SalesGalleryAppointment() {
  return (
    <div className="w-full py-36 px-4 bg-gradient-to-r from-stone-500 to-amber-600">
      <div className="max-w-2xl mx-auto text-center text-white">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider mb-4">Enquiry</p>
          <h2 className="text-3xl md:text-4xl font-light">
            Sales Gallery Is Now Open For<br />
            Private Appointments
          </h2>
        </div>

        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="flex-1">
            <select
              className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
            >
              <option value="" className="text-gray-800">Select an Agent *</option>
              <option value="2" className="text-gray-800">Agent John Doe</option>
              <option value="3" className="text-gray-800">Agent Jane Smith</option>
            </select>
          </div>

          <div className="flex-1">
            <input
              type="date"
              className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
            />
          </div>

          <div className="flex-1">
            <input
              type="time"
              className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
            />
          </div>

          <div>
            <button type='submit'
              className="w-full md:w-auto bg-white text-stone-700 py-2 px-6 text-sm uppercase tracking-wider"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SalesGalleryAppointment;