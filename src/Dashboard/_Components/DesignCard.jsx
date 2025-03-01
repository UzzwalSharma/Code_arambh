import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const DesignCard = ({ design }) => {
  const navigate = useNavigate();

  return (
    <div className="relative group rounded-xl border border-green-600 shadow-md bg-black/60 p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/50 duration-300">
      {/* Image Section */}
      <div className="relative flex justify-center mb-4 border-b border-green-600 pb-4">
        <img
          src={design.imageUrl}
          alt="Design Preview"
          className="w-40 h-40 object-cover rounded-full border-4 border-gradient-to-r from-green-500 to-green-600 transform group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Text Content */}
      <div className="mt-4 text-center">
        {/* User Description */}
        <h2 className="text-gray-300 text-sm mb-2 break-words overflow-hidden">
  {design.description}
</h2>


        {/* Model Name */}
        <h4 className="text-lg font-semibold text-white">
          Model:{" "}
          <span className="text-sm text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
            {design.modelName}
          </span>
        </h4>

        {/* Created by and Created on */}
        <div className="mt-4 border-t border-green-600 pt-4">
          <p className="text-gray-400 text-sm">
            Created by:{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600 font-bold">
              {design.userName}
            </span>
          </p>
          {/* <p className="text-gray-400 text-sm mt-2">
            Created on: {format(new Date(design.timestamp), "PPP")}
          </p> */}
        </div>
      </div>

      {/* View Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/generated-code/${design._id}`);
        }}
        className="w-full mt-4 px-5 py-3 text-center text-white font-semibold bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 transition-all duration-300 z-10 relative shadow-md transform hover:scale-105 border-2 border-green-600"
      >
        View Design
      </button>

      {/* Glowing Border Effect on Hover */}
      <div className="absolute inset-0 border-4 border-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
};

export default DesignCard;
