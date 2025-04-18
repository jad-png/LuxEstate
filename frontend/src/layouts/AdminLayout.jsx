import { Outlet } from "react-router";
import "../App.css";
import { Sidebar } from "../components/Admin/Sidebar";
import { Header } from "../components/Admin/Header";

const AdminLayout = () => {
    return (
        <div className="flex h-screen w-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md hidden md:block">
            <Sidebar />
          </aside>
    
          {/* Main Content Area */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Header */}
            <header className="h-16 bg-white shadow px-4 flex items-center justify-between">
              <Header />
            </header>
    
            {/* Page Content */}
            <main className="flex-1 overflow-auto bg-gray-100 p-6">
              <div className="w-full">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      );
};

export default AdminLayout;
