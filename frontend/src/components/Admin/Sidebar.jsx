import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

export function Sidebar() {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");


  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const menuItems = [
    { path: "/Admin/properties", label: "Properties" },
    { path: "/Admin/features", label: "Features" },
    { path: "/Admin/blog", label: "Blog Posts" },
    { path: "/Admin/notification", label: "Send Notifications" },
  ];

  return (
    <aside className="w-64 bg-white h-screen fixed top-0 left-0 border-r border-[#e5e5e5] pt-6">
      <div className="flex items-center mb-8">
        <span className="text-xl p-[22px] font-bold dm-serif text-center text-[#262626] w-full relative bottom-6">
          LUXTOWER
        </span>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center py-2 px-4 transition-colors duration-200 ${
                  activeRoute === item.path
                    ? "bg-[#a27d56] text-white"
                    : "text-[#666666] hover:bg-[#f8f3e9]"
                }`}
                onClick={() => setActiveRoute(item.path)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}