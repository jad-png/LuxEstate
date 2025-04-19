import React from "react";
import { NotificationItem } from "./NotificationItem";

export function NotificationsList() {
  const notifications = [
    {
      id: 1,
      recipient: "All Users",
      title: "System Update",
      message: "The system will undergo maintenance on April 20th.",
      timestamp: "2025-04-19 10:00 AM",
    },
    {
      id: 2,
      recipient: "John Doe",
      title: "Visit Reminder",
      message: "Your property visit is scheduled for tomorrow.",
      timestamp: "2025-04-18 02:30 PM",
    },
  ];
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Sent Notifications
      </h2>
      <table className="w-full text-left manrope">
        <thead>
          <tr className="border-b border-[#e5e5e5] text-[#666666]">
            <th className="py-2 px-4">ID</th>
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
              recipient={notification.recipient}
              title={notification.title}
              message={notification.message}
              timestamp={notification.timestamp}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
