import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./_Components/Header";
import UserSection from "./_Components/UserSection";
import CodeEditor from "./_Components/CodeEditor";
import SubscriptionPopup from "./_Components/SubscriptionPopup"; // Import the new component

function Viewcode() {
  const { id } = useParams();
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log("Fetching generated code for ID:", id);

    axios.get(`https://pixora-s-backend.onrender.com/generated-code/${id}`)
      .then((response) => {
        console.log("✅ API Response:", response.data);
        setCode(response.data.generatedCode);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching generated code:", error);
        setError("Failed to fetch the generated code.");
        setLoading(false);
      });
  }, [id]);

  // Open subscription popup
  const handleVerify = () => {
    setShowPopup(false);
    window.open(
      "https://meet.jit.si/Pixora-Expert-Ujjwal", // Your Jitsi meeting URL
      "_blank",
      "width=1000,height=700"
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-5 p-5 flex-grow gap-8">
        <div className="md:col-span-1">
          <UserSection />
        </div>
        <div className="col-span-4">
          <CodeEditor code={code} />
        </div>
      </div>

      {/* Button to Open Subscription Popup */}
      <div className="flex justify-center mt-4">
  <button
    onClick={() => setShowPopup(true)}
    className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center space-x-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 17l5 5m0 0l-5 5m5-5H10a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-2z"
      />
    </svg>
    <span>Start Expert Call</span>
  </button>
</div>


      {/* Render Subscription Popup */}
      {showPopup && (
        <SubscriptionPopup
          onClose={() => setShowPopup(false)}
          onVerify={handleVerify}
        />
      )}

      <footer className="text-black py-6 mt-auto">
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-sm md:text-base text-center font-bold">
            Crafted with ❤️ by <span className="font-extrabold text-green-400">Team Syntax Squad</span>
          </p>
          <p className="text-center font-bold text-gray-700">
            Ham hi wo jinki wajah se Designers ki job jaegi! (Bas, mazaak kar rahe hain 😜)
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Viewcode;