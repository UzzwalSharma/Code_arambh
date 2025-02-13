import React, { useEffect, useState } from "react";
import axios from "axios";
import DesignCard from "./DesignCard"; // Import the DesignCard component
import Loader from "/Loader/Loader.jsx"; // Import the Loader component

const Designs = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const response = await axios.get("https://pixora-s-backend.onrender.com/designs"); 
        console.log("📥 API Response:", response.data);
        setDesigns(response.data);
      } catch (error) {
        console.error("❌ Error fetching designs:", error);
      } finally {
        setLoading(false); // Stop loading when request completes
      }
    };
    fetchDesigns();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Loader loading={loading} message="Fetching Designs..." /> {/* Loader Component */}
      <h2 className="text-3xl font-bold text-green-400 text-center mb-8">
        Wireframes and Codes By the Community
      </h2>
      {!loading && designs.length === 0 && (
        <p className="text-center text-gray-400">No designs found.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!loading && designs.map((design) => (
          <DesignCard key={design._id} design={design} /> // Use the DesignCard component
        ))}
      </div>
    </div>
  );
};

export default Designs;
