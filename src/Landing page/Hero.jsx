import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import Navbar component
import { motion } from "framer-motion";
import Sparkles from "react-sparkle";
import { Link } from "react-router-dom";

const changingWords = ["Wireframes", "Images", "Sketches", "Designs"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % changingWords.length);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white bg-[#080808] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative z-10">
        <h1 className="text-7xl font-black uppercase leading-tight">
          We <span className="text-gray-400">Transform</span> <br />
          <div className="relative inline-block">
            <Sparkles
              color="gold"
              count={50}
              minSize={2}
              maxSize={10}
              speed={5}
              fadeOutSpeed={20}
              flicker={true}
            />
            <motion.span
              key={changingWords[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-8xl text-green-400 inline-block"
            >
              {changingWords[index]}
            </motion.span>
          </div>
          <br />
          Into Code
        </h1>

        <Link to="/dashboard">
        {/* NEON CTA BUTTON */}
        <motion.button
  className="mt-8 px-10 py-5 text-xl font-bold uppercase tracking-wider text-white 
  bg-green-500 rounded-full border-2 border-green-400 relative 
  transition-all duration-300 ease-in-out overflow-hidden
  shadow-[0_0_20px_#00ff00] before:absolute before:top-0 before:left-0 
  before:w-full before:h-full before:bg-green-400 before:opacity-40 
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
  <span className="relative z-10 font-black tracking-wide drop-shadow-[0_0_5px_#00ff00] text-xl">
    Try Pixora for Free
  </span>

  {/* Neon Glow Ring Effect */}
  <span className="absolute inset-0 flex items-center justify-center">
    <span className="absolute w-36 h-36 bg-green-400 rounded-full blur-3xl opacity-40 animate-pulse"></span>
  </span>
</motion.button>
</Link>


        {/* TAGLINE */}
        <p className="mt-4 text-gray-400 text-lg italic">
          AI-Powered Magic, Just One Click Away!
        </p>
      </div>

      {/* Floating Video Preview */}
      <motion.div
        className="absolute bottom-8 right-8 bg-white shadow-lg rounded-lg overflow-hidden border border-green-400"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <video
          className="w-[320px] h-[200px] rounded-lg"
          src="/intro.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          controls
        />
      </motion.div>
    </section>
  );
};

export default Hero;
