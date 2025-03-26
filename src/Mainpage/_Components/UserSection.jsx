import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const UserSection = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const [isRegenerating, setIsRegenerating] = useState(false);

  useEffect(() => {
    console.log("Fetching generated data for ID:", id);
    
    axios.get(`https://pixora-s-backend.onrender.com/generated-code/${id}`)
      .then((response) => {
        console.log("✅ API Response:", response.data);
        setData(response.data);
        setNewDescription(response.data.description || "");
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching data:", error);
        setError("Failed to fetch the data.");
        setLoading(false);
      });
  }, [id]);

  const handleRegenerate = async () => {
    if (!newDescription.trim()) return alert("Description cannot be empty!");

    setIsRegenerating(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/regenerate-code/${id}`,
        { description: newDescription }
      );
      setData(response.data); // Update with the new generated data
      alert("Code successfully regenerated! 🎉");
    } catch (error) { 
      console.error("❌ Error regenerating code:", error);
      alert("Failed to regenerate code. Try again.");
    }
    setIsRegenerating(false);
  };

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

<div className="flex flex-col items-center">
  {isEditing ? (
    <textarea
      className="w-full bg-black/50 text-white p-4 border-2 border-green-600 rounded-lg shadow-sm resize-none h-32 overflow-auto"
      value={newDescription}
      onChange={(e) => setNewDescription(e.target.value)}
      rows={4}
    ></textarea>
  ) : (
    <div className="w-full bg-gray-900 text-gray-300 p-4 border border-green-600 rounded-lg text-center max-h-32 overflow-auto">
      {data.description || "No description provided"}
    </div>
  )}

  {/* Buttons */}
  {/* <div className="flex space-x-3 mt-4">
    {isEditing ? (
      <button
        onClick={() => setIsEditing(false)}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
      >
        Cancel
      </button>
    ) : (
      <button
        onClick={() => setIsEditing(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Edit Description
      </button>
    )}

    {isEditing && (
      <button
        onClick={handleRegenerate}
        className={`px-4 py-2 rounded-lg ${
          isRegenerating
            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-500"
        }`}
        disabled={isRegenerating}
      >
        {isRegenerating ? "Regenerating..." : "Regenerate Code"}
      </button>
    )}
  </div> */}
</div>


      {/* Created At Section */}
      <motion.h3
        className="text-lg font-medium text-green-400 mt-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Created At
      </motion.h3>
      <p className="text-gray-400 italic text-center mt-2 text-sm">
        {new Date(data.timestamp).toLocaleString()}
      </p>
    </motion.div>
  );
};

export default UserSection;
