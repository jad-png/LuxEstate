import React, { useState } from "react";
import { Outlet } from "react-router";
import { AgentHeader } from "../components/Agent/AgentHeader";
import { AgentSidebar } from "../components/Agent/AgentSidebar";
const AgentLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AgentHeader
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="hidden md:block">
          <AgentSidebar isSidebarOpen={true} toggleSidebar={toggleSidebar} />
        </div>
        {isSidebarOpen && (
          <div className="md:hidden">
            <AgentSidebar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </div>
        )}
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 bg-[#f8f3e9]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AgentLayout;
