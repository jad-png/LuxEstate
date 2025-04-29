import React, { useEffect, useState } from "react";
import api from "../../services/api";

export function AttachFeatureModal() {
  const [features, setFeatures] = useState([]);
  const [properties, setProperties] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchFeatures = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/features");
      const apiResponse = response.data.features;

      setFeatures(apiResponse);
      setLoading(false);
    } catch (error) {
      setError("Failed to load features");
      setLoading(false);
    }
  };

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/properties");
      const apiResponse = response.data.properties;
      setProperties(apiResponse);
      setLoading(false);
    } catch (error) {
      setError("Failed to load properties");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatures();
    fetchProperties();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedFeatures((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((featureId) => featureId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSubmit = async () => {
    setError(null);
    try {
      await api.post(`/properties/${selectedPropertyId}/features`, {
        feature_ids: selectedFeatures,
      });
      setError(null);
    } catch (error) {
      console.error("Error adding feature:", error);
      setError("Failed to add feature");
    }
  };
  return (
    <div className="">
      <div className="bg-white p-8 mt-4 shadow-lg w-full">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
          Attach Features to Property
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Select a Property
            </label>
            <div className="border border-[#e5e5e5] p-3 max-h-48 overflow-y-auto">
              <div className="flex items-center mb-2">
                <select
                  value={selectedPropertyId}
                  onChange={(e) =>
                    setSelectedPropertyId(Number(e.target.value))
                  }
                  className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
                >
                  <option value="">-- Choose a Property --</option>
                  {properties.map((property) => (
                    <option key={property.id} value={property.id}>
                      {property.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Select Features
            </label>
            <div className="border border-[#e5e5e5] p-3 max-h-48 overflow-y-auto">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature.id)}
                    onChange={() => handleCheckboxChange(feature.id)}
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
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onSubmit={handleSubmit}
              className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]"
            >
              Attach Features
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
