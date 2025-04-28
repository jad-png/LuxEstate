import React, { useEffect, useState } from "react";
import api from "../../services/api";

export function PropertyModel() 
{
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    area: "",
    status: "",
    admin_id: "",
    image_path: "",
    video_path: "",
    feature_ids: "",
    category_id: "",
});


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fethcCategories = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("");
      const apiResponse = response.data;
      setCategories(apiResponse);
    } catch (error) {
      setError("Failed to load categories");
      setLoading(false);
    }
  };

  useEffect(() => {
    fethcCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await api.post("/properties", {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        location: formData.location,
        bedrooms: formData.bedrooms,
        area: formData.area,
        status: formData.status,
        admin_id: formData.admin_id,
        image_path: formData.image_path,
        video_path: formData.video_path,
        feature_ids: formData.feature_ids,
        category_id: formData.category_id,
      }); 
      setSuccess("Property created successfully");
      setFormData({
        title: "",
        description: "",
        price: "",
        location: "",
        bedrooms: "",
        area: "",
        status: "",
        admin_id: "",
        image_path: "",
        video_path: "",
        feature_ids: "",
        category_id: "",
      });
      setLoading(false);
    } catch (error) {
      setError("Failed to create property");
      setLoading(false);
    }
  };
    return (
        <div className="">
          <div className="bg-white p-8 shadow-lg w-full mt-4">
            <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
              Create New Property
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 font-manrope">
              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Property Name *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Manhattan Loft"
                  required
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., 401 Broadway, NY"
                  required
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                >
                  <option value="">Select Status</option>
                  <option value="Available">Available</option>
                  <option value="Occupied">Occupied</option>
                  <option value="Under Maintenance">Under Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Price (USD) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g., 500000"
                  required
                  min="0"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Bedrooms
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  placeholder="e.g., 3"
                  min="0"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Area (sq ft)
                </label>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g., 1200"
                  min="0"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the property..."
                  rows="4"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] resize-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Image
                </label>
                <input
                  type="file"
                  name="image_path"
                  value={formData.image_path}
                  onChange={handleChange}
                  placeholder="e.g., /images/property.jpg"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Video
                </label>
                <input
                  type="file"
                  name="video_path"
                  value={formData.video_path}
                  onChange={handleChange}
                  placeholder="e.g., /videos/property.mp4"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Feature IDs
                </label>
                <input
                  type="text"
                  name="feature_ids"
                  value={formData.feature_ids}
                  onChange={handleChange}
                  placeholder="e.g., 1,2,3"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#666666] mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  placeholder="e.g., cat001"
                  className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 bg-[#a27d56] text-white rounded-md hover:bg-[#8b6a47] transition-colors ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Creating..." : "Create Property"}
                </button>
              </div>
            </form>
          </div>
        </div>
    );
}