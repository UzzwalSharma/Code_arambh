import React from "react";
import { motion } from "framer-motion";
import CircleGraph from "./Circlegraph.jsx";
const stats = [
  {
    number: "+300",
    title: "Code Generation Speed",
    description: "Instantly convert sketches into clean, production-ready code.",
  },
  {
    number: "100K",
    title: "Framework Support",
    description: "Export designs to React, Tailwind, and HTML/CSS effortlessly.",
  },
  {
    number: "+10",
    title: "AI UI Refinements",
    description: "Enhances your UI automatically for a cleaner, professional look.",
  },
  {
    number: "+280",
    title: "Seamless Integrations",
    description: "Works with VS Code, GitHub, and Figma for a smooth workflow.",
  },
];

const ComparisonSection = () => {
  return (
    <section className="relative py-20 px-10 bg-gray-300 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Feature Cards */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-8">
            Why <span className="text-green-500">Pixora</span> Stands Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 shadow-md rounded-3xl p-4 border border-gray-200 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-4xl font-bold text-green-500">{stat.number}</div>
                <h3 className="text-lg font-semibold mt-2">{stat.title}</h3>
                <p className="text-gray-600 mt-1">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

         {/* Right Side - Circular Graph */}
         <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
          <CircleGraph /> {/* Circle Graph Component */}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
