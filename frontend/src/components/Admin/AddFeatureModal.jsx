import React, { useState } from "react";
import api from "../../services/api";

export function AddFeatureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setError(null);
    try {
      await api.post("/features", {
        name: formData.name,
      });
    } catch (error) {
      console.error("Error adding feature:", error);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
          Add New Feature
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Feature Name *
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="e.g., Swimming Pool"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
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
            onSubmit={handleSubmit}
            onClick={onClose}
            className="px-4 py-2 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]"
          >
            Add Feature
          </button>
        </div>
      </div>
    </div>
  );
}
