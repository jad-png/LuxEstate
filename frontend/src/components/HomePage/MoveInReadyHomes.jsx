import React from 'react';

export function MoveInReadyHomes() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-amber-700 text-sm uppercase tracking-wider mb-1">Availability</p>
        <h2 className="text-3xl font-medium">Move-In Ready Homes</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-amber-600 text-white">
              <th className="py-3 px-4 text-left font-medium">RESIDENCE</th>
              <th className="py-3 px-4 text-center font-medium">BED/BATH</th>
              <th className="py-3 px-4 text-center font-medium">SQ. FT.</th>
              <th className="py-3 px-4 text-center font-medium">SALE PRICE</th>
              <th className="py-3 px-4 text-center font-medium">RENT PRICE</th>
              <th className="py-3 px-4 text-center font-medium">FLOOR PLAN</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-4 px-4 text-gray-800 font-medium">1</td>
                <td className="py-4 px-4 text-center text-gray-600">1</td>
                <td className="py-4 px-4 text-center text-gray-600">1</td>
                <td className="py-4 px-4 text-center text-gray-600">1</td>
                <td className="py-4 px-4 text-center text-gray-600">1</td>
                <td className="py-4 px-4 text-center">
                  <button className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-4 border border-gray-200 rounded uppercase text-xs tracking-wider">
                    View Now
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}