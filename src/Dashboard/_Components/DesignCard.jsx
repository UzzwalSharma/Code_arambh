import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const DesignCard = ({ design }) => {
  const navigate = useNavigate();

  return (
    <div className="relative group rounded-xl border-2 border-gray-700 bg-black/70 p-6 shadow-lg hover:shadow-xl hover:shadow-green-500 transition-transform transform hover:scale-105 duration-300">
      {/* Image Section */}
      <div className="relative flex justify-center mb-6">
        <img
          src={design.imageUrl}
          alt="Design Preview"
          className="w-40 h-40 object-cover rounded-full border-4 border-green-500 transform group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Text Content */}
      <div className="mt-4 text-gray-200">
        {/* User Description */}
        <h2 className="text-sm mb-2 text-gray-300">{design.description}</h2>

        {/* Model Name */}
        <h4 className="text-lg font-semibold text-white">
          Model:{" "}
          <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500">
            {design.modelName}
          </span>
        </h4>

        {/* Created by and Created on */}
        <div className="mt-4">
          <p className="text-gray-300 text-sm">
            Created by:{" "}
            <span className="font-bold text-green-400">{design.userName}</span>
          </p>
          <p className="text-gray-300 text-sm mt-2">
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
        className="w-full mt-4 px-5 py-3 text-center text-white font-semibold bg-gradient-to-r from-green-400 via-yellow-400 to-green-600 rounded-xl hover:bg-gradient-to-r hover:from-green-500 hover:to-yellow-500 transition-all duration-200 shadow-md transform hover:scale-105"
      >
        View Design
      </button>

      {/* Glowing Border Effect on Hover */}
      <div className="absolute inset-0 border-4 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
};

export default DesignCard;
