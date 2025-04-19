import React from "react";

export function ProfileInfo({ user }) {
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5] mb-6">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Personal Information
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={user.name}
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Phone Number
          </label>
          <input
            type="text"
            value={user.phone}
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Address
          </label>
          <textarea
            value={user.address}
            rows="3"
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] resize-none"
            readOnly
          />
        </div>
        <button className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
