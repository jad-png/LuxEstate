import React, { useEffect, useState } from "react";
import { NotificationItem } from "./NotificationItem";
import api from "../../services/api";

export function NotificationsList() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchNotifications = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/notifications/all");
      const apiResponse = response.data;
      console.log(apiResponse);
      setNotifications(apiResponse);
    } catch (error) {
      setError("Failed to fetch notifications");
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Sent Notifications
      </h2>
      <div className="max-h-[400px] overflow-y-auto">
        <table className="w-full text-left manrope">
          <thead>
            <tr className="border-b border-[#e5e5e5] text-[#666666]">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Sender</th>
              <th className="py-2 px-4">Recipient</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Message</th>
              <th className="py-2 px-4">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                notification={notification}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
