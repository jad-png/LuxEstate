import React, { useEffect, useState } from "react";
import api from "../../services/api";

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState([]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNotifications = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/notifications");
      const apiResponse = response.data.notifications;
      setNotifications(apiResponse);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to load notifications");
      console.error("Error fetching notifications:", error);
      setNotifications([]); // Reset to empty array on error
    } finally {
      setIsLoading(false); // Always reset loading state
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleSubmit = async (notificationId, status) => {
    // e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);
    console.log("Submitting notificationId:", notificationId, "Type:", typeof notificationId);
    try {
      await api.patch(`/notifications/${notificationId}/read`, { status });
      setSuccess("Notification marked as read successfully!");
      fetchNotifications(); 
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to mark notification as read"
      );
      console.error("Error marking notification as read:", error.response?.data);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-[#e5e5e5] z-50 max-h-96 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold dm-serif text-[#262626] mb-3">
          Notifications
        </h2>
        {notifications.length === 0 ? (
          <div className="text-center text-[#666666] manrope">
            No notifications to display.
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 bg-white rounded-md border border-[#e5e5e5] shadow-sm"
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="inline-block px-2 py-1 bg-[#a27d56] text-white text-xs manrope rounded-full mb-1">
                      {notification.type}
                    </span>
                    <p className="text-sm text-[#666666] manrope">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#666666] manrope">
                    {new Date(notification.created_at).toLocaleDateString()}
                  </span>
                    <button onClick={() => handleSubmit(notification.id, "Seen")} className="px-2 py-1 bg-[#a27d56] text-white manrope rounded-md hover:bg-[#8b6a47] text-xs">
                      Mark as Read
                    </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
