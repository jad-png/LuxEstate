import React from "react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen fixed top-0 left-0 border-r border-[#e5e5e5] p-6">
      <div className="flex items-center mb-8">
        <div className="h-10 w-10 rounded-full bg-[#f8f3e9] flex items-center justify-center mr-2">
          <div className="h-6 w-6 rounded-full bg-[#a27d56]"></div>
        </div>
        <span className="text-xl font-bold dm-serif text-[#262626]">
          LUXTOWER
        </span>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 bg-[#a27d56] text-white rounded-lg manrope"
            >
              <span className="mr-3">🏠</span> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#666666] hover:bg-[#f8f3e9] rounded-lg manrope"
            >
              <span className="mr-3">📊</span> Analytics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#666666] hover:bg-[#f8f3e9] rounded-lg manrope"
            >
              <span className="mr-3">🏢</span> Properties
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#666666] hover:bg-[#f8f3e9] rounded-lg manrope"
            >
              <span className="mr-3">👥</span> Users
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#666666] hover:bg-[#f8f3e9] rounded-lg manrope"
            >
              <span className="mr-3">⚙️</span> Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
