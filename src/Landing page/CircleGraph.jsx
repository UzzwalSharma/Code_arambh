import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const points = [
  { label: "AI-Powered Conversion", radius: 100, speed: 5 },
  { label: "Sketch to Code", radius: 150, speed: 7 },
  { label: "Figma to React", radius: 200, speed: 9 },
  { label: "Auto UI Optimization", radius: 250, speed: 11 },
];

const getRandomPosition = () => ({
  x: Math.random() * 500 - 250,
  y: Math.random() * 500 - 250,
});

const CircleGraph = () => {
  const [particles, setParticles] = useState(
    Array.from({ length: 10 }, () => getRandomPosition())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(Array.from({ length: 10 }, () => getRandomPosition()));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px]">
      {/* Glowing Orb Effect */}
      <motion.div
        className="absolute w-[90%] h-[90%] bg-gradient-to-r from-[#00ff99] via-[#0066ff] to-[#00ff99] rounded-full blur-[120px] opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <div className="absolute w-[70%] h-[70%] border-2 border-[#00ff99] rounded-full shadow-[0_0_60px_rgba(0,255,153,0.6)] backdrop-blur-lg"></div>
      <div className="absolute w-[50%] h-[50%] border-2 border-[#00ff99] rounded-full shadow-[0_0_50px_rgba(0,255,153,0.8)] backdrop-blur-md"></div>

      {/* Dynamic Particle Effects */}
      {particles.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-[#f6ff00] rounded-full shadow-[0_0_10px_rgba(246,255,0,0.8)]"
          animate={{ x: pos.x, y: pos.y, opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Rotating Points with Labels */}
      {points.map((point, index) => (
        <motion.div
          key={index}
          className="absolute flex flex-col items-center"
          animate={{ rotate: 360 }}
          transition={{ duration: point.speed, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        >
          {/* Glowing Dot */}
          <motion.div
            className="absolute w-6 h-6 bg-[#f6ff00] rounded-full shadow-[0_0_25px_rgba(246,255,0,0.9)] hover:scale-150 transition-all duration-300"
            style={{
              top: `calc(50% - ${point.radius}px)`,
              left: "50%",
              transform: `translate(-50%, -50%)`,
            }}
            whileHover={{ scale: 1.3 }}
          />

          {/* Rotating Label */}
          <motion.div
            className="absolute text-white text-sm font-semibold bg-black bg-opacity-80 px-4 py-2 rounded-lg shadow-[0_0_12px_rgba(0,255,153,0.9)] backdrop-blur-lg"
            style={{
              top: `calc(50% - ${point.radius + 35}px)`,
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}
            animate={{ rotate: -360 }} // Counter rotation to keep text readable
            transition={{ duration: point.speed, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            {point.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CircleGraph;
