import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react"; // ✅ Import useState and useEffect
import axios from "axios"; // ✅ Import axios

import Header from "./_Components/Header";
import UserSection from "./_Components/UserSection";
import CodeEditor from "./_Components/CodeEditor";

function Viewcode() {
  const { id } = useParams(); // Get the unique ID from the URL
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching generated code for ID:", id);

    axios.get(`https://pixora-s-backend.onrender.com/generated-code/${id}`)
      .then((response) => {
        console.log("✅ API Response:", response.data);
        setCode(response.data.generatedCode); // Ensure correct field name
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching generated code:", error);
        setError("Failed to fetch the generated code.");
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-5 p-5 flex-grow gap-8">
        {/* User Section - Takes 1 column (20%) */}
        <div className="md:col-span-1">
          <UserSection />
        </div>
  
        {/* Code Editor - Takes 4 columns (80%) */}
        <div className="col-span-4">
          <CodeEditor code={code} />
        </div>
      </div>

      {/* Shoutout Section */}
{/* Shoutout Section */}
<footer className=" text-black py-6 mt-auto">
  <div className="flex flex-col justify-center items-center space-y-2">
    <p className="text-sm md:text-base text-center font-bold transition-transform duration-300 hover:scale-105">
      Crafted with <span role="img" aria-label="heart" className="inline-block animate-pulse">❤️</span> &amp; a sprinkle of magic by
      <span className="font-extrabold text-green-400">Team Syntax Squad</span>
    </p>
    <p className="text-center font-bold text-gray-700 transition-colors duration-300 hover:text-gray-900">
      Ham hi wo jinki wajah se Designers ki job jaegi! (Bas, mazaak kar rahe hain 😜)
    </p>
  </div>
</footer>

    </div>
  );
}

export default Viewcode;
