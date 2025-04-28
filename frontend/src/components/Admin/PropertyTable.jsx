import React, { useEffect, useState } from "react";
import api from "../../services/api";

export function PropertyTable() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
  }
  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Property Management
      </h2>
      {success && <p className="text-[#a27d56] manrope mb-4">{success}</p>}
      {error && <p className="text-red-600 manrope mb-4">{error}</p>}
      {loading && <p className="text-[#666666] manrope mb-4">Loading...</p>}
      <table className="w-full text-left manrope">
        <thead>
          <tr className="border-b border-[#e5e5e5] text-[#666666]">
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Location</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.length === 0 && !loading ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-[#8b8570]">
                No properties available.
              </td>
            </tr>
          ) : (
            properties.map((property) => (
              <tr
                key={property.id}
                className="border-b border-[#e5e5e5] text-[#666666]"
              >
                <td className="py-2">{property.id}</td>
                <td className="py-2">{property.name}</td>
                <td className="py-2">{property.location}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      property.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {property.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
