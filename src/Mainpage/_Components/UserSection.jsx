import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    return <p className="text-center text-red-500 font-semibold">{error}</p>;
  if (!data)
    return <p className="text-center text-gray-400">No data found.</p>;

  return (
    <div className="p-6 bg-black/80 border border-green-500 rounded-xl shadow-lg max-w-3xl mx-auto">
      {/* Wireframe Section */}
      <h2 className="text-2xl font-bold text-green-400 mb-3">Wireframe</h2>
      <img
        src={data.imageUrl}
        alt="Wireframe Preview"
        className="w-full rounded-lg border-2 border-green-500 shadow-md"
      />

      {/* AI Model */}
      <h2 className="text-2xl font-bold text-green-400 mt-6">AI Model</h2>
      <p className="bg-green-900 text-green-300 px-4 py-2 rounded-lg shadow-md">
        {data.modelName}
      </p>

      {/* Description */}
      <h2 className="text-2xl font-bold text-green-400 mt-6">Description</h2>
      <textarea
        className="w-full bg-black/50 text-white p-3 border border-green-500 rounded-lg shadow-sm"
        readOnly
        value={data.description || "No description provided"} // ✅ Fallback placeholder
      ></textarea>

      {/* Created At */}
      <h2 className="text-2xl font-bold text-green-400 mt-6">Created at</h2>
      <p className="text-gray-400 italic">
        {new Date(data.timestamp).toLocaleString()}
      </p>
    </div>
  );
};

export default UserSection;
