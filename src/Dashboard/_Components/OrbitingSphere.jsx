import React from "react";
import { motion } from "framer-motion";

const getRandomStartPosition = () => {
  const positions = [
    { x: "-50vw", y: "0vh" }, // Left
    { x: "50vw", y: "0vh" }, // Right
    { x: "0vw", y: "-50vh" }, // Top
    { x: "0vw", y: "50vh" }, // Bottom
  ];
  return positions[Math.floor(Math.random() * positions.length)];
};

const OrbitingSphere = ({ size = 30, color = "#3dcf5f", duration = 10, delay = 0 }) => {
  const startPosition = getRandomStartPosition();

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        filter: `drop-shadow(0px 0px 25px ${color})`,
        boxShadow: `0px 0px 40px ${color}`,
        zIndex: 50, // Keeps spheres above content
        opacity: 0.9,
      }}
      initial={{ opacity: 0, x: startPosition.x, y: startPosition.y }}
      animate={{
        opacity: [0, 1, 1, 1, 0], // Fade in and out smoothly
        x: ["-50vw", "50vw", "0vw", "-30vw", "40vw"], // Move in all directions
        y: ["-40vh", "30vh", "20vh", "-10vh", "50vh"], 
        rotate: [0, 90, 180, 270, 360], // Continuous rotation
        scale: [1, 1.2, 1], // Pulsing effect
      }}
      transition={{
        duration: duration, // Slow, smooth movement
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

export default OrbitingSphere;
