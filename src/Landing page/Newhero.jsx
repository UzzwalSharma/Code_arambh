import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon } from '@heroicons/react/24/solid';

const synonyms = ["DEVELOPMENT", "CODING" , "INNOVATION", "WEBSITES", "CREATION"];

// Helper function to generate grid lines and spaces between them
const generateGridLines = (numLines) => {
  const lines = [];
  for (let i = 1; i <= numLines; i++) {
    lines.push(i);
  }
  return lines;
};

const Hero = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % synonyms.length);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);

  // Handle mouse movement to update mouse position
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Create random dots moving along the grid lines
  const generateRandomDots = () => {
    const newDots = [];
    const numDots = 20; // Number of dots

    for (let i = 0; i < numDots; i++) {
      newDots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 2, // Random horizontal speed
        dy: (Math.random() - 0.5) * 2, // Random vertical speed
        speed: Math.random() * 2 + 2, // Speed at which the dot moves towards the cursor
      });
    }
    setDots(newDots);
  };

  // Function to smoothly update the dots' positions towards the mouse
  const updateDotPositions = () => {
    setDots((prevDots) =>
      prevDots.map((dot) => {
        // Calculate direction vector towards mouse position
        const dx = mousePosition.x - dot.x;
        const dy = mousePosition.y - dot.y;
        
        // Move the dot towards the mouse position with a smooth transition
        const distance = Math.sqrt(dx * dx + dy * dy); // Calculate the distance between dot and mouse
        const moveX = (dx / distance) * dot.speed;
        const moveY = (dy / distance) * dot.speed;

        // Update dot's position
        return {
          ...dot,
          x: dot.x + moveX,
          y: dot.y + moveY,
        };
      })
    );
  };

  // Update dot positions every frame
  useEffect(() => {
    generateRandomDots();

    const moveDots = setInterval(updateDotPositions, 16); // 60 FPS

    return () => clearInterval(moveDots);
  }, [mousePosition]);

  const verticalLines = generateGridLines(10); // Number of vertical lines
  const horizontalLines = generateGridLines(10); // Number of horizontal lines

  // Function to calculate color based on mouse position
  const getColorForPosition = (position, maxPosition) => {
    const normalized = position / maxPosition;
    const r = Math.floor(255 * normalized);
    const g = Math.floor(255 * (1 - normalized));
    const b = 200 + Math.floor(55 * Math.sin(normalized * Math.PI));
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div
      className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Color-changing Grid */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Vertical Lines */}
        {verticalLines.map((_, index) => {
          const leftPosition = `${(index + 1) * 10}%`;

          const distanceX = Math.abs(mousePosition.x - (index * window.innerWidth) / 10);
          const scaleX = 1 + Math.max(0, 0.1 - distanceX / 500); // Scale effect based on X distance
          const glowIntensity = Math.min(1, Math.max(0, 1 - distanceX / 300)); // Glow intensity effect

          // Calculate the color for the hollow space between lines
          const color = getColorForPosition(mousePosition.x, window.innerWidth);

          return (
            <motion.div
              key={`v-${index}`}
              className="absolute w-[2px] bg-white opacity-30"
              style={{
                top: 0,
                bottom: 0,
                left: leftPosition,
                transform: `scaleY(${scaleX})`,
                background: `linear-gradient(to right, ${color} 0%, ${color} 100%)`,
              }}
              animate={{
                scaleY: scaleX,
                backgroundColor: color,
                boxShadow: `0px 0px ${glowIntensity * 15}px rgba(0, 255, 0, ${glowIntensity})`,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
              whileHover={{
                skewY: "10deg", // Skew effect when hovered
                borderRadius: "8px", // Rounded corners effect
                transform: "scale(1.1)", // Slight scale effect for hover
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                  transform: { type: "spring", stiffness: 300, damping: 25 },
                },
              }}
            />
          );
        })}

        {/* Horizontal Lines */}
        {horizontalLines.map((_, index) => {
          const topPosition = `${(index + 1) * 10}%`;

          const distanceY = Math.abs(mousePosition.y - (index * window.innerHeight) / 10);
          const scaleY = 1 + Math.max(0, 0.1 - distanceY / 500); // Scale effect based on Y distance
          const glowIntensity = Math.min(1, Math.max(0, 1 - distanceY / 300)); // Glow intensity effect

          // Calculate the color for the hollow space between lines
          const color = getColorForPosition(mousePosition.y, window.innerHeight);

          return (
            <motion.div
              key={`h-${index}`}
              className="absolute h-[2px] bg-white opacity-30"
              style={{
                left: 0,
                right: 0,
                top: topPosition,
                transform: `scaleX(${scaleY})`,
                background: `linear-gradient(to bottom, ${color} 0%, ${color} 100%)`,
              }}
              animate={{
                scaleX: scaleY,
                backgroundColor: color,
                boxShadow: `0px 0px ${glowIntensity * 15}px rgba(0, 255, 0, ${glowIntensity})`,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
              whileHover={{
                skewX: "10deg", // Skew effect when hovered
                borderRadius: "8px", // Rounded corners effect
                transform: "scale(1.1)", // Slight scale effect for hover
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                  transform: { type: "spring", stiffness: 300, damping: 25 },
                },
              }}
            />
          );
        })}

        {/* Neonic Dots */}
        {dots.map((dot, index) => (
          <motion.div
            key={`dot-${index}`}
            className="absolute rounded-full bg-green-400 opacity-70"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              width: "8px",
              height: "8px",
            }}
            animate={{
              x: dot.x,
              y: dot.y,
              scale: [1, 1.5, 1], // Pulsing effect
              backgroundColor: `rgb(${Math.floor(255 * Math.random())}, 255, ${Math.floor(255 * Math.random())})`,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 2, // Dots grow larger when hovered
              transition: { duration: 0.3 },
            }}
          />
        ))}
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white">
        We are Revolutionizing{" "} <br />
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
              }}
            >
              {synonyms[index]}
            </motion.div>
          </AnimatePresence>
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-lg">
        Transform sketches, wireframes, and Figma designs into clean,
        production-ready code in seconds with Pixora.
      </p>

      <a href="https://youtu.be/p-ebDuNlhPA?si=22e2Bm_jlpBpnXyn" target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default Hero;
