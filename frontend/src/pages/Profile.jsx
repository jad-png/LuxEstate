import React, { useState } from "react";
import { ProfileInfo } from "../components/Profile/ProfileInfo";
import { OrderTable } from "../components/Profile/OrderTable";
import useAuthStore from "../stores/authStore";
import api from "../services/api";

export function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // address: "",
  });

  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      await api.put("", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        // address: formData.address,
      });

    } catch (error) {
      setError("Failed to update profile");
      console.error("Error updating profile:", error);
    }
  }
  const user = useAuthStore((state) => state.user);
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
        My Profile
      </h1>

      <ProfileInfo user={user} />

      {/* <OrderTable orderHistory={orderHistory} /> */}
    </div>
  );
}

export default Profile;
