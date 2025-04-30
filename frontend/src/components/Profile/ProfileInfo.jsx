import React, { useState } from "react";

export function ProfileInfo({
  formData,
  handleChange,
  handleSubmit,
  isLoading,
  previewImage,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] mb-6">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Personal Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Profile Picture
          </label>
          {previewImage && (
            <img
              src={previewImage}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
          )}
          <input
            type="file"
            name="profile_picture"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            readOnly={!isEditing}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="1"
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] resize-none"
            readOnly={!isEditing}
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={toggleEdit}
            className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
          {isEditing && (
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47] ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
