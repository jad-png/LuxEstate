import React, { useEffect, useState } from "react";
import api from "../../services/api";

export function PostModal() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    status: "",
    category_id: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchCategories = async () => {
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/category");

      const apiResponse = response.data;
      setCategories(apiResponse);
    } catch (error) {
      setError("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
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
      await api.post("/blog/posts", {
        title: formData.title,
        content: formData.content,
        status: formData.status,
        category_id: formData.category_id,
      });
      setFormData({
        title: "",
        content: "",
        status: "",
        category_id: null,
      });
      setSuccess("Post created successfully!");
    } catch (error) {
      setError("Failed to create post");
      console.error("Error creating post:", error);
    }
  };
  return (
    <div className="">
      <div className="bg-white p-8 shadow-md w-full mt-4">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
          Create New Blog Post
        </h2>
        {success && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., My New Blog Post"
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Content *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your blog post content here..."
              rows="6"
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] resize-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
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
                <option
                  key={category.id}
                  name="category_id"
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div
            type="submit"
            onClick={handleSubmit}
            className="mt-6 flex justify-end space-x-4"
          >
            <button className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]">
              Share Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
