import React from 'react';

export default function MoveInReadyHomes() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Move-In Ready Homes</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-[#C78960] text-white">
              <th className="py-3 px-4 font-medium text-left">RESIDENCE</th>
              <th className="py-3 px-4 font-medium text-center">BEDROOMS</th>
              <th className="py-3 px-4 font-medium text-center">SQ FT</th>
              <th className="py-3 px-4 font-medium text-center">NET PRICE</th>
              <th className="py-3 px-4 font-medium text-center">MONTHLY</th>
              <th className="py-3 px-4 font-medium text-right">AVAILABILITY</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody className="bg-white">
              <tr 
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-4 text-left">1</td>
                <td className="py-4 px-4 text-center">1</td>
                <td className="py-4 px-4 text-center">1</td>
                <td className="py-4 px-4 text-center">1</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-right">
                  <button className="text-amber-600 hover:text-amber-800 uppercase text-sm font-medium">
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}