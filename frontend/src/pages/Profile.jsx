import React, { useEffect, useState } from "react";
import { ProfileInfo } from "../components/Profile/ProfileInfo";
import { OrderTable } from "../components/Profile/OrderTable";
import useAuthStore from "../stores/authStore";
import api from "../services/api";

export function Profile() {
  const user = useAuthStore((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profile_picture: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        profile_picture: user.profile_picture || "",
      });
      setPreviewImage(user.profile_picture || "");
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      if (user) {
        setFormData({
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          address: user.address || "",
          profile_picture: null,
        });
        const response = await api.post("/profile", {
          headers: {
            _method: "PUT",
          },
        });
        setSuccess("Profile updated successfully!");
        useAuthStore.setState({ user: response.data.data });
        setPreviewImage(response.data.data.profile_picture || previewImage);
      }
    } catch (error) {
      setError("Failed to update profile");
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-red-500">Please log in to view your profile.</p>
      </div>
    );
  }
  console.log(1);
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
        My Profile
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <div className="flex flex-col gap-8">
        {/* Profile Picture Upload Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Update Profile Picture
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border-2 p-6"
          >
            <div className="w-full relative left-7">
              <div className="relative bg-[#C78960] hover:bg-[#d99b70] transition-all duration-300 w-40 h-40 rounded-full flex items-center justify-center" >
                <input
                  type="file"
                  id="profile_picture"
                  name="profile_picture"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-32 h-32 z-50 bg-white rounded-full border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] cursor-pointer"
                />
              </div>
            </div>
            {previewImage && (
              <div>
                <p className="text-sm text-gray-700">Preview:</p>
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  className="mt-2 w-32 h-32 object-cover rounded-full"
                />
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 w-56 bg-[#a27d56] text-white rounded hover:bg-[#8c6b47] disabled:bg-gray-400"
            >
              {isLoading ? "Uploading..." : "Upload Picture"}
            </button>
          </form>
        </div>
        {/* Profile Info Form */}
        <ProfileInfo
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {/* Visit History */}
        {/* <OrderTable visitHistory={visitHistory} /> */}
      </div>
    </div>
  );
}

export default Profile;
