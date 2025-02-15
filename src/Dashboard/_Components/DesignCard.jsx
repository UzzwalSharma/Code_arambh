import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const DesignCard = ({ design }) => {
  const navigate = useNavigate();

  return (
    <div className="relative group rounded-xl border border-gradient-to-r from-purple-500 via-blue-500 to-green-500 shadow-lg bg-black/50 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 duration-300">
      {/* Image Section */}
      <div className="relative flex justify-center mb-6">
        <img
          src={design.imageUrl}
          alt="Design Preview"
          className="w-48 h-48 object-cover rounded-full border-4 border-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform group-hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Text Content */}
      <div className="mt-4">
  {/* User Description */}
  <h2 className="text-gray-300 text-sm mb-2">{design.description}</h2>

  {/* Model Name */}
  <h4 className="text-lg font-extrabold text-white shimmer">
    Model:{" "}
    <span className="text-sm text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
      {design.modelName}
    </span>
  </h4>

  {/* Created by and Created on */}
  <div className="mt-4">
    <p className="text-gray-400 text-sm">
      Created by:{" "}
      <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 font-black">
        {design.userName}
      </span>
    </p>
    <p className="text-gray-400 text-sm mt-2">
      Created on: {format(new Date(design.timestamp), "PPP")}
    </p>
  </div>
</div>

      {/* View Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents interference from parent divs
          navigate(`/generated-code/${design._id}`);
        }}
        className="w-full mt-4 px-5 py-3 text-center text-white font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-xl hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 transition-all duration-300 z-10 relative shadow-lg transform hover:scale-105"
      >
        View Design
      </button>

      {/* Glowing Border Effect on Hover */}
      <div className="absolute inset-0 border-4 border-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
};

export default DesignCard;
