import React, { useEffect, useState } from "react";
import axios from "axios";
import DesignCard from "./DesignCard"; // Import the DesignCard component
import Loader from "/Loader/Loader.jsx"; // Import the Loader component

const Designs = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages
  const [flip, setFlip] = useState(false); // Flip animation state

  // Fetch designs with pagination
  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("https://pixora-s-backend.onrender.com/designs", {
          params: { page, limit: 10 }
        });
        console.log("📥 API Response:", response.data);
        setDesigns(response.data.designs);
        setTotalPages(Math.ceil(response.data.totalCount / 10)); // Calculate total pages
      } catch (error) {
        console.error("❌ Error fetching designs:", error);
      } finally {
        setLoading(false); // Stop loading when request completes
      }
    };
    fetchDesigns();
  }, [page]); // Fetch new designs when the page changes

  // Handle page change with flip animation
  const handlePageChange = (newPage) => {
    if (newPage === page) return;
    setFlip(true); // Trigger flip animation
    setPage(newPage); // Change page
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Loader loading={loading} message="Fetching Designs..." /> {/* Loader Component */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-10 px-8 py-3 border-2 border-green-600 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:scale-105 transition-all duration-300 ease-in-out text-center tracking-wide">
        Wireframes and Codes by the Community
      </h2>

      {!loading && designs.length === 0 && (
        <p className="text-center text-gray-400">No designs found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!loading && designs.map((design) => (
          <DesignCard key={design._id} design={design} /> // Use the DesignCard component
        ))}
      </div>

      {/* Fire-Emerging Gaming-style Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-6">
        <button
          onClick={() => handlePageChange(page > 1 ? page - 1 : page)}
          disabled={page === 1}
          className={`px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full mx-2 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:from-yellow-400 hover:to-red-500 disabled:bg-gray-500 disabled:cursor-not-allowed ${flip ? 'animate-flip' : ''} fire-effect`}
        >
          Previous
        </button>

        <span className="text-white font-extrabold text-2xl">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(page < totalPages ? page + 1 : page)}
          disabled={page === totalPages}
          className={`px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full mx-2 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:from-yellow-400 hover:to-red-500 disabled:bg-gray-500 disabled:cursor-not-allowed ${flip ? 'animate-flip' : ''} fire-effect`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Designs;
