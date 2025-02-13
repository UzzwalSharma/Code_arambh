import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./_Components/Sidebar";

function Layout() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar (Fixed Width) */}
      <div className="w-1/4">
        <Sidebar />
      </div>

      {/* Main Content (Takes up remaining space) */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
