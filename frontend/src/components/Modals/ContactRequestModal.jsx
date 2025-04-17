import React from "react";

export function ContactRequestModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
              Schedule a Visit
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Property
                </label>
                <select
                  className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                >
                  <option value="">Select a property</option>
                  <option value="1">Manhattan</option>
                  <option value="2">Brooklyn</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#666666] manrope mb-1">
                  Status
                </label>
                <select
                  className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-[#666666] manrope rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5]"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
    );
}