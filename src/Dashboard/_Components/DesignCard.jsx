import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const DesignCard = ({ design }) => {
  const navigate = useNavigate();

  return (
    <div className="relative group rounded-xl border border-green-500 shadow-lg bg-black/30 p-4 transition-transform transform hover:scale-105 hover:shadow-green-500/50 duration-300">
      {/* Image Section */}
      <div className="relative">
        <img
          src={design.imageUrl}
          alt="Design Preview"
          className="w-full h-40 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-80"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>

      {/* Text Content */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-white">
          Model:{" "}
          <span className="text-sm text-green-400">{design.modelName}</span>
        </h4>
        <h2 className="text-gray-300 text-sm">{design.description}</h2>
        <p className="text-gray-400 text-sm mt-2">
          Created on: {format(new Date(design.timestamp), "PPP")}
        </p>
      </div>

      {/* View Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents interference from parent divs
          navigate(`/generated-code/${design._id}`);
        }}
        className="w-full mt-4 px-4 py-2 text-center text-black font-semibold bg-green-400 rounded-lg hover:bg-green-500 transition-all duration-300 z-10 relative"
      >
        View Design 🚀
      </button>


      {/* Glowing Border Effect on Hover */}
      <div className="absolute inset-0 border-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
};

export default DesignCard;
