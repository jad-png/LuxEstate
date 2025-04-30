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
    const { name, value, files } = e.target;
    if (name === "profile_picture" && files[0]) {
      setFormData((prev) => ({
        ...prev,
        profile_picture: files[0],
      }));
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      if (formData.profile_picture) {
        data.append("profile_picture", formData.profile_picture);
      }

      const response = await api.put("/profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess("Profile updated successfully!");
      useAuthStore.setState({ user: response.data.data });
      setPreviewImage(response.data.data.profile_picture || previewImage);
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

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
        My Profile
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <ProfileInfo
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Profile;
