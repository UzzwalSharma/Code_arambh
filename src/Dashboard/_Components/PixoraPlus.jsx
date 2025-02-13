import React from "react";
import { FaCheck, FaCrown, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const plans = [
  {
    name: "Free",
    price: "$0/mo",
    icon: <FaCheck className="text-green-500 text-3xl" />, // Green for free plan
    features: ["Basic Wireframe Conversion", "Limited Exports", "Community Access"],
    buttonText: "Get Started",
    buttonStyle: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Pro",
    price: "$9.99/mo",
    icon: <FaStar className="text-blue-500 text-3xl" />, // Blue for pro plan
    features: ["Unlimited Wireframe Conversion", "Figma Integration", "Priority Support"],
    buttonText: "Upgrade to Pro",
    buttonStyle: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Premium",
    price: "$19.99/mo",
    icon: <FaCrown className="text-yellow-500 text-3xl" />, // Gold for premium plan
    features: ["AI-Enhanced Designs", "Export to Code (React, Tailwind)", "Dedicated Support"],
    buttonText: "Go Premium",
    buttonStyle: "bg-yellow-500 hover:bg-yellow-600",
  },
];

const PixoraPlus = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Pixora Plus</h2>
      <p className="text-gray-400 mb-10">Choose the plan that fits your workflow.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-black/30 border border-gray-700 p-6 rounded-xl shadow-lg">
            <div className="flex justify-center mb-4">{plan.icon}</div>
            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
            <p className="text-gray-400 text-lg mb-4">{plan.price}</p>
            <ul className="text-sm text-gray-300 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <FaCheck className="text-green-400" /> {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-2 text-white font-semibold rounded-lg ${plan.buttonStyle}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixoraPlus;
