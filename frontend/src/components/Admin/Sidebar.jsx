import React from "react";
import { Link } from "react-router";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen fixed top-0 left-0 border-r border-[#e5e5e5] pt-6">
      <div className="flex items-center mb-8">
        <span className="text-xl p-[22px] font-bold dm-serif text-center text-[#262626] w-full relative bottom-6">
          LUXTOWER
        </span>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/Admin/properties"
              className="flex items-center py-2 px-4 bg-[#a27d56] text-white"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/Admin/features"
              className="flex items-center py-2 px-4 text-[#666666] hover:bg-[#f8f3e9]"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/Admin/blog"
              className="flex items-center py-2 px-4 text-[#666666] hover:bg-[#f8f3e9]"
            >
              Blog Posts
            </Link>
          </li>
          <li>
            <Link
              to="/Admin/notification"
              className="flex items-center py-2 px-4 text-[#666666] hover:bg-[#f8f3e9]"
            >
              Send Notifications
            </Link>
          </li>
          {/* <li>
            <Link
              href="#"
              className="flex items-center py-2 px-4 text-[#666666] hover:bg-[#f8f3e9"
            >
            Users
            </Link>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
}
