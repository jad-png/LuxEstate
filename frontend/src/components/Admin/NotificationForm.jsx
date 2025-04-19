import React from "react";

export function NotificationForm() {
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] mb-6">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Send Notification
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Recipient
          </label>
          <select className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]">
            <option value="all">All Users</option>
            <option value="user1">John Doe</option>
            <option value="user2">Jane Smith</option>
            <option value="user3">Mike Johnson</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Notification Title
          </label>
          <input
            type="text"
            placeholder="e.g., System Update"
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
          />
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            rows="4"
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] resize-none"
          />
        </div>
        <button className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]">
          Send Notification
        </button>
      </div>
    </div>
  );
}
