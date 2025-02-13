import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaTh, FaSearch, FaUserAlt, FaCrown, FaInfoCircle, FaLayerGroup, FaPalette } from "react-icons/fa";


function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/dashboard", icon: <FaLayerGroup />, label: "Workspace" }, // More relevant icon
    { path: "/dashboard/designs", icon: <FaPalette />, label: "Pixora Designs" }, // More descriptive label
    { path: "/dashboard/profile", icon: <FaUserAlt />, label: "My Profile" }, // Personal touch
    { path: "/dashboard/subscription", icon: <FaCrown />, label: "Pixora Plus" }, // Personal touch
    { path: "/dashboard/about", icon: <FaInfoCircle />, label: "About Pixora" }, // Project-specific name
  ];

  return (
    <div className="fixed h-full md:w-1/5 p-6 bg-black/70 backdrop-blur-xl border border-green-500/30 
      rounded-b-md shadow-[0px_0px_30px_#00ff99] flex flex-col items-center space-y-8">

      {/* Logo and Heading */}
      <div className="flex flex-col items-center space-y-3 mb-6">
        <img
          src="/Logo2.jpg"
          alt="Pixora"
          className="h-20 w-20 object-contain border-4 border-green-400 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-green-300 neon-text drop-shadow-[0_0_10px_#00ff99]">
          Pixora
        </h1>
        <p className="text-sm font-medium text-green-200 tracking-widest opacity-90">
          "Sketch. Convert. Deploy."
        </p>
        <hr className="w-3/4 border-none h-[2px] bg-green-400 shadow-[0px_0px_15px_#00ff99]" />
      </div>

      {/* Sidebar Links */}
      <div className="w-full space-y-3">
        {navItems.map(({ path, icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-4 text-[1.1rem] font-semibold py-3 px-6 rounded-lg transition-all duration-300 
              ${
                location.pathname === path
                  ? "bg-green-400 text-gray-900 shadow-lg transform scale-105"
                  : "text-green-100 hover:bg-green-500 hover:text-black hover:scale-105"
              }`}
          >
            <span className="tracking-wide text-black ">{icon}</span>
            <span className="tracking-wide text-white font-black">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
