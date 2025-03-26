import React from "react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typingText = "Pixora is an AI-powered UI transformer that instantly converts sketches, wireframes, and Figma designs into clean, production-ready code. Our mission is to democratize UI development, enabling designers, developers, and non-tech users to bring their ideas to life faster than ever. With AI-powered refinements and seamless integration with VS Code and GitHub, Pixora revolutionizes the way UI is built.";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < typingText.length) {
        setText((prev) => prev + typingText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [charIndex]);

  return <p className="text-lg text-gray-300">{text}|</p>;
};


const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-black text-white">
      {/* Left Side - Image */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-0">
    <div className="w-[20%] h-[20%] md:w-[30%] md:h-[40%] bg-[#60cb72] blur-3xl opacity-30 rounded-lg"></div>
  </div> */}
      
      {/* Left Side - Image with Up-Down Animation */}
      <motion.div 
        className="md:w-1/2 w-full flex justify-center relative z-10"
        animate={{ rotate: [0, 5, 0, -5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      >
        <img 
          src="/about pixora.jpg" 
          alt="A boy using Pixora on his laptop"
          width={300} 
          height={300} 
          className="rounded-2xl shadow-lg drop-shadow-2xl" 
        />
      </motion.div>
      {/* Right Side - Content */}
      <div className="md:w-1/2 w-full md:pl-10 text-center md:text-left">
        <h2 className="text-4xl font-bold text-green-400 mb-4">About Pixora</h2>

        <TypingEffect />
      </div>
    </section>
  );
};

export default About;
