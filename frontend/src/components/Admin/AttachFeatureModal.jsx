import React from "react";

export function AttachFeatureModal() {
//   if (!isOpen) return null;

  const availableFeatures = [
    { id: 1, name: "Swimming Pool" },
    { id: 2, name: "Gym" },
    { id: 3, name: "Parking" },
    { id: 4, name: "Rooftop Terrace" },
  ];
  return (
    <div className="">
      <div className="bg-white p-8 mt-4 shadow-lg w-full">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
          Attach Features to Property
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Select Features
            </label>
            <div className="border border-[#e5e5e5] p-3 max-h-48 overflow-y-auto">
              {availableFeatures.map((feature) => (
                <div key={feature.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`feature-${feature.id}`}
                    className="h-4 w-4 text-[#a27d56] focus:ring-[#a27d56] border-[#e5e5e5] rounded"
                  />
                  <label
                    htmlFor={`feature-${feature.id}`}
                    className="ml-2 text-[#666666] manrope"
                  >
                    {feature.name}
                  </label>
                </div>
               ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
         
          <button
            className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]"
          >
            Attach Features
          </button>
        </div>
      </div>
    </div>
  );
}
