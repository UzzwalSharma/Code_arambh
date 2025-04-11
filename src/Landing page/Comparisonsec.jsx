import React from "react";
import { motion } from "framer-motion";
import CircleGraph from "/src/Landing page/CircleGraph.jsx";
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
    <section className="relative py-20 px-6 md:px-10 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white overflow-hidden" id="reviews">
    {/* Optional: Floating Ghost or Blood Drip Video */}
    
  
    {/* Spider webs or ghost overlays */}
    <img
      src="/blood web-Photoroom.png"
      alt="Spider Web Left"
      className="absolute top-0 left-0 w-40 md:w-38 opacity-100 z-20 pointer-events-none"
    />
    <img
      src="/blood web-Photoroom.png"
      alt="Spider Web Right"
      className="absolute top-0 right-0 w-40 md:w-84 opacity-100 z-20 pointer-events-none transform scale-x-[-1]"
    />
  
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-40">
      {/* Left Side - Feature Cards */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-extrabold mb-8 text-red-500 font-fantasy tracking-wider">
          Why <span className="text-purple-400">Pixora</span> Stands Out
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#1f1f1f] border border-[#333] rounded-2xl p-5 flex flex-col items-start shadow-md relative z-50 hover:border-orange-500 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(255, 102, 0, 0.2)",
              }}
            >
              <div className="text-3xl font-bold text-purple-400">{stat.number}</div>
              <h3 className="text-lg font-semibold mt-2 text-orange-300">{stat.title}</h3>
              <p className="text-gray-400 mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
  
      {/* Right Side - Circular Graph */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0 z-40">
        <CircleGraph />
      </div>
    </div>
  </section>
  
  
  );
};

export default ComparisonSection;