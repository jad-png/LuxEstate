import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router";

// const { NavLink, Outlet } = window.ReactRouterDOM;
// const { motion, AnimatePresence } = window.FramerMotion;

export function AgentHeader({ toggleSidebar, isSidebarOpen }) {
  const agentName = "John Doe"; 
  return (
    <header className="bg-[#f8f3e9] border-b border-[#e5e5e5] py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Hamburger Menu (Mobile) */}
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
              d={
                isSidebarOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-10 relative mr-2">
            <div className="h-full w-full rounded-full bg-[#e9c496] flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-[#f8f3e9]"></div>
            </div>
          </div>
          <span className="text-lg md:text-xl font-bold tracking-wider dm-serif text-[#262626]">
            LUXTOWER
          </span>
        </div>
              {/* agent name */}
        <div className="text-[#262626] manrope text-base md:text-lg hidden md:block">
          Agent: {agentName}
        </div>
{/* agent name (mobile) */}
        <div className="md:hidden text-[#262626] manrope text-base">
          {agentName}
        </div>
      </div>
    </header>
  );
}
