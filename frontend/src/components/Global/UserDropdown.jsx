import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../stores/authStore";

export function UserDropDown() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  const user = useAuthStore((state) => state.user);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center space-x-2">
        <img
          // src={user.profile_picture}
          alt="Profile"
          className="h-10 w-10 rounded-full border border-[#e5e5e5]"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#e5e5e5] z-50 ">
          <div className="px-4 py-2 border-b border-[#e5e5e5]">
            <p className="text-[#262626] manrope font-semibold">{user.name}</p>
          </div>
          <div className="py-1">
            <Link
              to="/favorites"
              className="block px-4 py-2 text-[#666666] manrope hover:bg-[#f8f3e9] hover:text-[#a27d56]"
            >
              Favorites
            </Link>
            <Link
              to="/my-profile"
              className="block px-4 py-2 text-[#666666] manrope hover:bg-[#f8f3e9] hover:text-[#a27d56]"
            >
              My Profile
            </Link>
          </div>
          <div className="border-t-1 ">
            <form 
              onSubmit={handleLogout}
              className="block border-t px-4 py-2 text-[#666666] manrope hover:bg-[#f8f3e9] hover:text-[#a27d56]">
              <button type="submit">Logout</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
