import React, { useEffect, useState } from "react";
import api from "../../services/api";

export function VisitRequestModal({ isOpen, onClose }) {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    propertyId: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get("/properties");
        setProperties(response.data.properties);
        console.log(response.data);
        
      } catch (error) {
        setError("Failed to load properties");
      }
    };
    fetchProperties();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      const updatedFormData = {};

      for (let key in prev) {
        updatedFormData[key] = prev[key];
      }

      updatedFormData[name] = value;
      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.post("/visit-request", {
        property_id: formData.propertyId,
        date: formData.date,
        time: formData.time,
      });

      setSuccess("Visit request submitted with success");
      setFormData({ propertyId: "", date: "", time: "" });
      setTimeout(onClose, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
          Schedule a Visit
        </h2>
        {success && <p className="text-[#c78960] manrope mb-4">{success}</p>}
        {error && <p className="text-red-600 manrope mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Select Property *
            </label>
            <select
              name="propertyId"
              value={formData.propertyId}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#8b8570] manrope focus:outline-none focus:border-[#c78960]"
            >
              <option value="">Select a property</option>
              {properties.map((property) => (
                <option key={property.id} value={property.id}>
                  {property.name || `Property ${property.id}`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#8b8570] manrope focus:outline-none focus:border-[#c78960]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Time *
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#8b8570] manrope focus:outline-none focus:border-[#c78960]"
            />
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 text-[#666666] manrope rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
