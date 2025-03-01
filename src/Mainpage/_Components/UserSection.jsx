import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const UserSection = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching generated data for ID:", id);
    
    axios.get(`https://pixora-s-backend.onrender.com/generated-code/${id}`)
      .then((response) => {
        console.log("✅ API Response:", response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching data:", error);
        setError("Failed to fetch the data.");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-400 animate-pulse">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 font-medium">{error}</p>;
  if (!data)
    return <p className="text-center text-gray-400">No data found.</p>;

  // Extract first name from the username
  const firstName = data.userName ? data.userName.split(" ")[0] : "User";

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-black/70 border-2 border-green-600 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Username Section */}
      <motion.h2
        className="text-2xl font-semibold text-green-400 mb-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Created by, {firstName}!
      </motion.h2>

      {/* Wireframe Section */}
      <motion.h3
        className="text-xl font-medium text-green-400 mb-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Wireframe Preview
      </motion.h3>
      <div className="flex justify-center mb-6">
        <img
          src={data.imageUrl}
          alt="Wireframe Preview"
          className="w-full md:w-3/4 rounded-lg border-2 border-green-600 shadow-md"
        />
      </div>

      {/* AI Model Section */}
      <motion.h3
        className="text-xl font-medium text-green-400 mt-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        AI Model
      </motion.h3>
      <p className="bg-green-900 text-green-300 px-4 py-2 rounded-lg shadow-sm text-center">
        {data.modelName}
      </p>

      {/* Description Section */}
      <motion.h3
        className="text-xl font-medium text-green-400 mt-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Description
      </motion.h3>
      <textarea
        className="w-full bg-black/50 text-white p-4 border-2 border-green-600 rounded-lg shadow-sm mt-4 resize-none text-base"
        readOnly
        value={data.description || "No description provided"}
      ></textarea>

      {/* Created At Section */}
      {/* <motion.h3
        className="text-lg font-medium text-green-400 mt-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Created At
      </motion.h3>
      <p className="text-gray-400 italic text-center mt-2 text-sm">
        {new Date(data.timestamp).toLocaleString()}
      </p> */}
    </motion.div>
  );
};

export default UserSection;
