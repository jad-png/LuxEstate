import React, { useEffect, useState } from "react";
import { FeatureItem } from "./FeatureItem";
import { AddFeatureModal } from "./AddFeatureModal";
import api from "../../services/api";

export function FeatureList() {
  const [features, setFeatures] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    fetchFeatures();
  }, []);

  const handleDeleteFeature = async (id) => {
    try {
      await api.delete(`/features/${id}`);
      setFeatures((prev) => prev.filter((feature) => feature.id !== id));
    } catch (error) {
      setError("Failed to delete feature");
      console.error("Error deleting feature:", error);
    }
  }
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold dm-serif text-[#262626]">
          All Features
        </h2>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]"
          >
            Add New Feature
          </button>
          <AddFeatureModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
      </div>
      <table className="w-full text-left manrope">
        <thead>
          <tr className="border-b border-[#e5e5e5] text-[#666666]">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {features.length > 0 ? (
            features.map((feature) => (
              <FeatureItem
                key={feature.id}
                id={feature.id}
                name={feature.name}
                feature={feature}
                onDelete={handleDeleteFeature}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-[#666666]">
                No features available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
