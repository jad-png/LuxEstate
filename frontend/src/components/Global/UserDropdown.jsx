import React, { useState } from "react";

export function UserDropDown() {
  const user = {
    name: "John Doe",
    profilePhoto: "https://via.placeholder.com/40", // Placeholder for profile photo
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      {/* Profile Photo Button */}
      <button onClick={toggleDropdown} className="flex items-center space-x-2">
        <img
          src={user.profilePhoto}
          alt="Profile"
          className="h-10 w-10 rounded-full border border-[#e5e5e5]"
        />
      </button>

      {/* Dropdown Menu (Static, always visible for demo) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#e5e5e5] z-10">
          <div className="px-4 py-2 border-b border-[#e5e5e5]">
            <p className="text-[#262626] manrope font-semibold">{user.name}</p>
          </div>
          <div className="py-1">
            <a
              href="/favorites"
              className="block px-4 py-2 text-[#666666] manrope hover:bg-[#f8f3e9] hover:text-[#a27d56]"
            >
              Favorites
            </a>
            <a
              href="/profile"
              className="block px-4 py-2 text-[#666666] manrope hover:bg-[#f8f3e9] hover:text-[#a27d56]"
            >
              My Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
