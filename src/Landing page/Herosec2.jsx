import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
    const titles = ["{ Design Smarter }", "{ Code Faster }", " { Innovate Better }", "{ Build Effortlessly }"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 2000); // Change title every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
        
      {/* Top Animated Gray Curve */}
    <motion.div
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[60vh] 
             bg-gray-800 rounded-b-[50%] opacity-50 overflow-hidden"
>
  {/* Lightning Streaks Effect */}
  <div className="absolute inset-0 w-full h-full rounded-b-[50%] 
                  border-t-[5px] border-transparent 
                  shadow-[0px_-10px_40px_rgba(0,255,153,0.5)] 
                  animate-lightning">
  </div>
</motion.div>


      {/* Title */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={titles[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-6xl font-extrabold text-center z-10 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent"
        >
          {titles[index]}
        </motion.h1>
      </AnimatePresence>

      {/* Mobile Mockup with Glow & Floating Effect */}
      <div className="relative flex items-center justify-center mt-10">
  <motion.div
    initial={{ y: 10 }}
    animate={{ y: -10 }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
      ease: "easeInOut",
    }}
    className="relative"
  >
    {/* Enhanced Glowing Effect */}
    <div className="absolute inset-0 w-[500px] h-[600px] bg-[#00ff99] blur-[150px] opacity-40 rounded-full"></div>

    {/* Enlarged & Improved Mockup Image */}
    <img
      src="/marketing-creative-collage-with-phone.png"
      alt="Mockup"
      className="w-[320px] md:w-[420px] lg:w-[500px] transform rotate-[-8deg] drop-shadow-[0_10px_50px_rgba(0,255,153,0.5)] relative"
    />
  </motion.div>
</div>


      {/* Call to Action Button (Glassmorphic) */}
      <motion.button
  className="relative mt-8 px-12 py-5 text-lg font-bold uppercase tracking-widest 
  text-white bg-green-500 rounded-full border-2 border-green-400 shadow-[0_0_20px_#00ff00] 
  transition-all duration-300 ease-in-out overflow-hidden 
  before:absolute before:inset-0 before:bg-green-400 before:opacity-40 
  before:blur-xl before:rounded-full before:-z-10"
  
  whileHover={{
    scale: 1.1,
    boxShadow: "0px 0px 40px #00ff00, 0px 0px 80px #00ff00 inset",
    textShadow: "0px 0px 10px #00ff00",
    transition: { duration: 0.3, ease: "easeInOut" },
  }}
  
  animate={{
    boxShadow: [
      "0px 0px 20px #00ff00",
      "0px 0px 35px #00ff00",
      "0px 0px 20px #00ff00",
    ],
    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }}
>
  <span className="relative z-10 font-extrabold tracking-wide drop-shadow-[0_0_5px_#00ff00] text-xl">
    GET IN TOUCH
  </span>

  {/* Neon Glow Effect & Pulse Animation */}
  <span className="absolute inset-0 flex items-center justify-center">
    <span className="absolute w-36 h-36 bg-green-400 rounded-full blur-3xl opacity-40 animate-pulse"></span>
  </span>
</motion.button>


      {/* Bottom Animated Gray Curve */}
    
    </div>
  );
};

export default HeroSection;
