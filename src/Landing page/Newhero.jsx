import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 1; // Single background video
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos) {
      setLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(() => {
    gsap.from("#hero-heading", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-sm bg-blue-75"
      >
        <video
          ref={videoRef}
          src="/hero-1.mp4" // Make sure this path is correct
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        {/* Overlay */}
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50"></div>

        {/* Reimagining Text */}
        <div className="absolute top-5 left-0 z-50 text-white text-6xl font-extrabold">
         We are Revolutionizing
        </div>

        {/* Broader Pixora-related Text */}
        <div className="absolute bottom-20 right-5 z-50 text-white text-6xl font-extrabold">
          Development
        </div>

     

        {/* Content */}
        <div className="absolute left-0 top-0 z-40 w-full h-full flex flex-col justify-center items-center text-center text-white">
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
   <a href="https://youtu.be/jmigBo42low?si=nQu-mwAabFOHQ9u2" target="_blank" rel="noopener noreferrer"> 
     Watch Pixora Now! 
   </a>
</span>


  {/* Neon Glow Ring Effect */}
  <span className="absolute inset-0 flex items-center justify-center">
    <span className="absolute w-36 h-36 bg-green-400 rounded-full blur-3xl opacity-40 animate-pulse"></span>
  </span>
</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
