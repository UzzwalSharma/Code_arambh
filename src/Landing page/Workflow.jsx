import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "📤 Upload Your Design", description: "Start by uploading a sketch, wireframe, or Figma file.", side: "left" },
  { title: "🤖 AI Analysis", description: "Pixora’s AI processes the design, understanding components and layout.", side: "right" },
  { title: "⚡ Code Generation", description: "Instantly convert designs into clean, production-ready code.", side: "left" },
  { title: "🚀 Download & Deploy", description: "Export the generated code and integrate it into your project.", side: "right" },
];

const Timeline = () => {
  return (
    <div className="relative flex flex-col items-center w-full py-20 bg-black text-white overflow-hidden">
      
      {/* Section Header - Placed ABOVE the Timeline */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, ease: "easeOut" }} 
        className="text-center mb-20 px-6 relative bottom-20"
      >
        <h2 className="text-4xl font-extrabold text-[#00ff99] drop-shadow-lg">
           How <span className="text-white">Pixora</span> Works
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Transform your ideas into code in just a few simple steps. Our AI handles the heavy lifting so you can focus on building amazing experiences! 🌟
        </p>
      </motion.div>

      {/* Glowing Timeline */}
      <div className="absolute left-1/2 top-[100px] w-1 h-full bg-gradient-to-b from-[#00ff99] to-transparent opacity-70 transform -translate-x-1/2"></div>

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`relative flex items-center w-full my-10 ${
            step.side === "left" ? "justify-start" : "justify-end"
          }`}
        >
          {/* Glowing Connector Dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], boxShadow: ["0px 0px 15px rgba(0,255,153,0.8)", "0px 0px 25px rgba(0,255,153,1)", "0px 0px 15px rgba(0,255,153,0.8)"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute left-1/2 w-5 h-5 bg-[#00ff99] rounded-full shadow-[0_0_15px_rgba(0,255,153,1)] transform -translate-x-1/2"
          ></motion.div>

          {/* Glassmorphic Card */}
          <div className="relative w-[40%] p-8 rounded-2xl border border-[#00ff99] bg-gray-800 bg-opacity-40 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,153,0.7)] transition-transform hover:scale-105">
            <h3 className="text-2xl font-black text-[#00ff99] drop-shadow-md tracking-wide">
              {step.title}
            </h3>
            <p className="mt-3 text-lg text-gray-200 leading-relaxed tracking-wide">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
