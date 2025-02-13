import React, { useState, useEffect } from "react";
import Imageupload from "./Imageuploade";
import { motion } from "framer-motion";
import OrbitingSphere from "./OrbitingSphere"; // Import

function Workspace() {
  const phrases = ["Wireframes", "Sketches", "Designs", "Prototypes"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative container mx-auto p-6  overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Floating Spheres - Now Covering Full Workspace */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbitingSphere size={35} color="#3dcf5f" duration={15} delay={0} />
        <OrbitingSphere size={25} color="#ffcc00" duration={17} delay={2} />
        <OrbitingSphere size={40} color="#ff3d3d" duration={14} delay={4} />
        <OrbitingSphere size={20} color="#4da6ff" duration={16} delay={6} />
        <OrbitingSphere size={45} color="#9400D3" duration={18} delay={8} />
        <OrbitingSphere size={30} color="#ff1493" duration={12} delay={10} />
      </div>

      {/* Header Section */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="font-extrabold text-4xl sm:text-5xl text-white drop-shadow-lg">
          Convert Your{" "}
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-[#3dcf5f]"
          >
            {phrases[index]}
          </motion.span>{" "}
          to Code
        </h2>
      </div>

      {/* Main content */}
      <div className="p-6 mt-20 relative z-10 w-full">
        <Imageupload />
      </div>
    </div>
  );
}

export default Workspace;
