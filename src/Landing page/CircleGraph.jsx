import React from "react";
import { motion } from "framer-motion";

const points = [
  { label: "AI-Powered Conversion", radius: 100, speed: 5 },
  { label: "Sketch to Code", radius: 150, speed: 7 },
  { label: "Figma to React", radius: 200, speed: 9 },
  { label: "Auto UI Optimization", radius: 250, speed: 11 },
];

const CircleGraph = () => {
  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px]">
      {/* Glowing 3D Sphere Effect */}
      <div className="absolute w-[90%] h-[90%] bg-gradient-to-r from-[#00ff99] via-[#0066ff] to-[#00ff99] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute w-[70%] h-[70%] bg-[#00ff99] bg-opacity-10 rounded-full border border-[#00ff99] shadow-[0_0_50px_rgba(0,255,153,0.5)]"></div>
      <div className="absolute w-[50%] h-[50%] bg-[#00ff99] bg-opacity-10 rounded-full border border-[#00ff99] shadow-[0_0_40px_rgba(0,255,153,0.7)]"></div>

      {/* Rotating Dots with Labels */}
      {points.map((point, index) => (
        <motion.div
          key={index}
          className="absolute flex flex-col items-center"
          animate={{ rotate: 360 }}
          transition={{ duration: point.speed, repeat: Infinity, ease: "linear" }}
          style={{
            transformOrigin: "center",
          }}
        >
          {/* Rotating Dot */}
          <div
            className="absolute w-5 h-5 bg-[#f6ff00] rounded-full shadow-[0_0_20px_rgba(0,255,153,0.9)]"
            style={{
              top: `calc(50% - ${point.radius}px)`,
              left: "50%",
              transform: `translate(-50%, -50%)`,
            }}
          />

          {/* Rotating Label */}
          <motion.div
            className="absolute text-white text-sm font-semibold bg-black bg-opacity-80 px-3 py-1 rounded-lg shadow-[0_0_10px_rgba(0,255,153,0.8)] backdrop-blur-sm"
            style={{
              top: `calc(50% - ${point.radius + 30}px)`,
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}
            animate={{ rotate: -360 }} // Counter rotation to keep text readable
            transition={{ duration: point.speed, repeat: Infinity, ease: "linear" }}
          >
            {point.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CircleGraph;
