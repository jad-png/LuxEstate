import React, { useEffect, useState } from "react";
import api from "../../services/api";

export function PropertyModel() {
  const [categories, setCategories] = useState([]);
  const [features, setFeatures] = useState([]);
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

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fethcCategories = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/category");
      
      const apiResponse = response.data;
      setCategories(apiResponse);
    } catch (error) {
      setError("Failed to load categories");
      setLoading(false);
    }
  };

  const fetchFeatures = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/features");      
      const apiResponse = response.data.features;

      setFeatures(apiResponse);
    } catch (error) {
      setError("Failed to load features");
      setLoading(false);
    }
  }; 

  useEffect(() => {
    fethcCategories();
    fetchFeatures();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    setVideos(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("bedrooms", formData.bedrooms);
      formDataToSend.append("area", formData.area);
      formDataToSend.append("status", formData.status);
      formDataToSend.append("admin_id", formData.admin_id);
      formDataToSend.append("category_id", formData.category_id);

      const featureIdsArray = formData.feature_ids
        .split(",")
        .map((id) => id.trim())
        .filter((id) => id);
      featureIdsArray.forEach((id) => formDataToSend.append("feature_ids[]", id));

      images.forEach((image) => formDataToSend.append("image_path[]", image));

      videos.forEach((video) => formDataToSend.append("video_path[]", video));

      await api.post("/properties", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
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
        feature_ids: "",
        category_id: "",
      });
      setImages([]);
      setVideos([]);
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
            <label className="block text-sm text-[#666666] mb-1">Status</label>
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
              Images (JPEG, PNG, JPG, GIF, max 2MB each)
            </label>
            <input
              type="file"
              multiple
              accept="image/jpeg,image/png,image/jpg,image/gif"
              onChange={handleImageChange}
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
            />
            {images.length > 0 && (
              <div className="mt-2 text-sm text-[#666666]">
                {images.map((image, index) => (
                  <p key={index}>{image.name}</p>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm text-[#666666] mb-1">
              Videos (MP4, MOV, AVI, WMV, max 20MB each)
            </label>
            <input
              type="file"
              multiple
              accept="video/mp4,video/mov,video/avi,video/wmv"
              onChange={handleVideoChange}
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
            />
            {videos.length > 0 && (
              <div className="mt-2 text-sm text-[#666666]">
                {videos.map((video, index) => (
                  <p key={index}>{video.name}</p>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm text-[#666666] mb-1">
              Feature IDs (comma-separated)
            </label>
            {features.length > 0 && (
              <div className="mb-2 text-sm text-[#666666]">
                {features.map((feature) => (
                  <p key={feature.id}>
                    {feature.id}: {feature.name}
                  </p>
                ))}
              </div>
            )}
            <input
              type="text"
              name="feature_ids"
              value={formData.feature_ids}
              onChange={handleChange}
              placeholder="e.g., 1, 2, 3"
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
            />
            <p className="text-xs text-[#666666] mt-1">
              Enter feature IDs separated by commas (e.g., 1,2,3)
            </p>
          </div>

          <div>
            <label className="block text-sm text-[#666666] mb-1">
              Category *
            </label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] rounded-md focus:outline-none focus:border-[#a27d56] transition-colors"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
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
