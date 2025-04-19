import React from "react";
import { ProfileInfo } from "../components/Profile/ProfileInfo";
import { OrderTable } from "../components/Profile/OrderTable";

export function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+44 123 456 7890",
    address: "465 Zack Prairie Suite 337, NY",
  };
  const orderHistory = [
    {
      id: 1,
      date: "2025-04-15",
      total: 1200,
      status: "Delivered",
    },
    {
      id: 2,
      date: "2025-04-10",
      total: 850,
      status: "In Preparation",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
        My Profile
      </h1>

      <ProfileInfo user={user} />

      <OrderTable orderHistory={orderHistory} />
    </div>
  );
}

export default Profile;
