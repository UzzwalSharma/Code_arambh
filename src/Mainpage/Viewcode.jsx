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

    axios.get(`http://localhost:5000/generated-code/${id}`)
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
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-5 p-5 h-screen gap-8">
        {/* User Section - Takes 1 column (20%) */}
        <div className="md:col-span-1">
          <UserSection />
        </div>
  
        {/* Code Editor - Takes 4 columns (80%) */}
        <div className="col-span-4">
          <CodeEditor code={code} />
        </div>
      </div>
    </div>
  );
  
}

export default Viewcode;
