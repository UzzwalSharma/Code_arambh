import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/solid";
import soundEffect from "/cyberpunk-beat-64649.mp3";
import Spline from "@splinetool/react-spline";
import Lightning from "../blocks/Backgrounds/Lightning/Lightning.jsx";

const synonyms = ["DEVELOPMENT", "CODING", "INNOVATION", "WEBSITES", "CREATION"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % synonyms.length);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Ensure the audio is preloaded
    audioRef.current = new Audio(soundEffect);
    audioRef.current.volume = 0.5; // Set initial volume
    audioRef.current.loop = true; // Keep looping the sound
    audioRef.current.preload = "auto"; // Preload the audio
  }, []);

  const handleMouseEnter = () => {
    if (!isPlaying) {
      // Ensure the audio is played only on user interaction
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Lightning Background */}
      <div className="absolute inset-0 z-0">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          We are Revolutionizing <br /> <br />
          <span className="relative inline-block w-[180px] h-[50px] perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute w-full h-full flex items-center justify-center text-green-400"
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  position: "relative",
                }}
              >
                {/* Changing text with neon sparks */}
                <motion.span
                  className="relative font-extrabold text-green-400"
                  animate={{
                    textShadow: [
                      "0px 0px 5px #00ff00",
                      "0px 0px 15px #00ff00",
                      "0px 0px 5px #00ff00",
                    ],
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                >
                  {synonyms[index]}
                </motion.span>

                {/* Neon Sparks Effect */}
                <motion.div
                  className="absolute -top-2 left-1/2 w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5],
                    x: [-10, 10, -10],
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
          Transform sketches, wireframes, and Figma designs into clean,
          production-ready code in seconds with Pixora.
        </p>

        <a
          href="https://youtu.be/p-ebDuNlhPA?si=22e2Bm_jlpBpnXyn"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            <span className="relative z-10 font-black tracking-wide drop-shadow-[0_0_5px_#00ff00] text-xl flex items-center space-x-2">
              <PlayIcon className="h-6 w-6 text-green-500" />
              <span>Watch Pixora in Action!</span>
            </span>

            {/* Neon Glow Ring Effect */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-36 h-36 bg-green-400 rounded-full blur-3xl opacity-40 animate-pulse"></span>
            </span>
          </motion.button>
        </a>
      </div>

      <div className="absolute top-0 right-0 w-2/4  h-full flex items-center justify-center">
        <Spline scene="https://prod.spline.design/vZsyc0PJtTYjyrWj/scene.splinecode" />
      </div>
    </div>
  );
};

export default Hero;
