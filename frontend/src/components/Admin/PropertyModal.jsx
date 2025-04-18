import React from "react";

export function PropertyModel() 
{
    return (
        <div className="">
          <div className="bg-white p-8 shadow-lg w-full mt-4">
            <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
              Create New Property
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Property Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Manhattan Loft"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  placeholder="e.g., 401 Broadway, NY"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Status
                </label>
                <select
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                >
                  <option value="Available">Available</option>
                  <option value="Occupied">Occupied</option>
                  <option value="Under Maintenance">Under Maintenance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Price (USD)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 500000"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Describe the property..."
                  rows="4"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] resize-none"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              
              <button
                // onClick={}
                className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]"
              >
                Create Property
              </button>
            </div>
          </div>
        </div>
    );
}