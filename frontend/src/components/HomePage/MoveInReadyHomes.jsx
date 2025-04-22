import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import usePropertyStore from "../../stores/PropertyStore";

export function MoveInReadyHomes() {
  const { properties, loading, error, fetchProperties } = usePropertyStore();
  // const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  console.log(properties);
  const displayedProperties = properties.slice(0, 5);

  const handleViewPlan = (propertyId) => {
    // navigate('');
    console.log("todo: navigate to property related to it");
  };
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-amber-700 text-sm uppercase tracking-wider mb-1">
          Availability
        </p>
        <h2 className="text-3xl font-medium">Move-In Ready Homes</h2>
      </div>

      {/* Error States */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-amber-600 text-white w-full">
              <th className="py-3 px-4 text-left font-medium">Title</th>
              <th className="py-3 px-4 text-center font-medium">Location</th>
              <th className="py-3 px-4 text-center font-medium">Area</th>
              <th className="py-3 px-4 text-center font-medium">BED/BATH</th>
              <th className="py-3 px-4 text-center font-medium">SALE PRICE</th>
              <th className="py-3 px-4 text-center font-medium">More Informations</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
          {displayedProperties.length > 0 ? (
                displayedProperties.map((property) => (
                  <tr key={property.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-4 px-4 text-gray-800 font-medium">{property.title || 'N/A'}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{property.location || 'N/A'}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{property.area || 'N/A'}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{property.bedrooms || 'N/A'}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{property.price || 'N/A'}</td>
                    <td className="py-4 px-4 text-center text-gray-600">
                      {property.sale_price ? `$${property.price.toLocaleString()}` : 'N/A'}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => handleViewPlan(property.id)}
                        className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-4 border border-gray-200 rounded uppercase text-xs tracking-wider"
                      >
                        View Now
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 px-4 text-center text-gray-600">
                    No properties available.
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
