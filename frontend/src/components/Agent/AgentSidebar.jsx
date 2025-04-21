import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router";

export function AgentSidebar({ isSidebarOpen, toggleSidebar }) {
    const navItems = [
      { label: "Client Communication", path: "/agents/clients" },
      { label: "Manage Appointments", path: "/agents/appointments" },
    ];

    return (
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed md:static top-0 left-0 w-64 h-full bg-[#f8f3e9] border-r border-[#e5e5e5] p-4 z-50 md:z-0"
          >
            <div className="flex justify-between items-center mb-4 md:mb-4">
              <h2 className="text-xl font-semibold dm-serif text-[#262626]">
                Agent Dashboard
              </h2>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-[#262626] focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={toggleSidebar} // Close sidebar on link click (mobile)
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg manrope text-[#666666] transition-colors duration-200 ${
                      isActive
                        ? "bg-[#a27d56] text-white"
                        : "hover:bg-[#e9c496] hover:text-[#262626]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
