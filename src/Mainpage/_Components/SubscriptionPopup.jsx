import { motion } from "framer-motion";
import { useState } from "react";

const SubscriptionPopup = ({ onClose, onVerify }) => {
  const [subscriptionCode, setSubscriptionCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const verifySubscription = () => {
    setLoading(true);
    setErrorMessage(""); // Reset any previous error message

    // Simulate a 3-second verification delay
    setTimeout(() => {
      if (subscriptionCode === "PIXORA123") {
        setErrorMessage("");
        onVerify();
      } else {
        setErrorMessage("❌ The subscription code you entered is invalid. Please try again.");
      }
      setLoading(false); // Reset loading state after 3 seconds
    }, 3000); // Simulate a 3-second verification delay
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-opacity-40 backdrop-blur-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="w-full max-w-3xl bg-transparent text-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Side: Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/biometric-security_18844026.gif" // Replace with your image path
            alt="Unlock Expert Guidance"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side: Code Input */}
        <div className="w-1/2 p-10 flex flex-col items-center justify-center space-y-6 rounded-r-lg bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
          <h2 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 tracking-wide">
            Premium Access Required
          </h2>
          <p className="text-lg text-gray-300 text-center leading-relaxed max-w-md">
            Please enter the subscription code to gain access to our premium features and expert guidance.
          </p>

          <input
            type="text"
            className="w-full px-6 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            placeholder="Enter Your Code"
            value={subscriptionCode}
            onChange={(e) => setSubscriptionCode(e.target.value)}
          />
          {errorMessage && (
            <p className="text-red-500 text-sm font-semibold mt-2">{errorMessage}</p>
          )}

          <div className="flex space-x-6 mt-6">
            {/* Cancel Button */}
            <motion.button
              onClick={onClose}
              className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg font-semibold text-white"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 40px rgba(255, 0, 0, 0.6), 0px 0px 80px rgba(255, 0, 0, 0.6) inset",
                textShadow: "0px 0px 10px rgba(255, 0, 0, 0.8)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              Cancel
            </motion.button>

            {/* Verify & Join Button */}
            <motion.button
              onClick={verifySubscription}
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold rounded-lg hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 40px rgba(0, 255, 0, 0.6), 0px 0px 80px rgba(0, 255, 0, 0.6) inset",
                textShadow: "0px 0px 10px rgba(0, 255, 0, 0.8)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-t-2 border-gray-200 border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying Code...</span>
                </div>
              ) : (
                "Verify & Join"
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubscriptionPopup;
