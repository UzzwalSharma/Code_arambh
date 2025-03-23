// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   { title: "📤 Upload Your Design", description: "Start by uploading a sketch, wireframe, or Figma file.", side: "left" },
//   { title: "🤖 AI Analysis", description: "Pixora’s AI processes the design, understanding components and layout.", side: "right" },
//   { title: "⚡ Code Generation", description: "Instantly convert designs into clean, production-ready code.", side: "left" },
//   { title: "🚀 Download & Deploy", description: "Export the generated code and integrate it into your project.", side: "right" },
// ];

// const Timeline = () => {
//   return (
//     <div className="relative flex flex-col items-center w-full py-20 bg-black text-white overflow-hidden" id="workflow">
      
//       {/* Section Header - Placed ABOVE the Timeline */}
//       <motion.div 
//         initial={{ opacity: 0, y: -50 }} 
//         whileInView={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.7, ease: "easeOut" }} 
//         className="text-center mb-20 px-6 relative bottom-20"
//       >
//         <h2 className="text-4xl font-extrabold text-[#00ff99] drop-shadow-lg">
//            How <span className="text-white">Pixora</span> Works
//         </h2>
//         <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
//           Transform your ideas into code in just a few simple steps. Our AI handles the heavy lifting so you can focus on building amazing experiences! 🌟
//         </p>
//       </motion.div>

//       {/* Glowing Timeline */}
//       <div className="absolute left-1/2 top-[100px] w-1 h-full bg-gradient-to-b from-[#00ff99] to-transparent opacity-70 transform -translate-x-1/2"></div>

//       {steps.map((step, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//           className={`relative flex items-center w-full my-10 ${
//             step.side === "left" ? "justify-start" : "justify-end"
//           }`}
//         >
//           {/* Glowing Connector Dot */}
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], boxShadow: ["0px 0px 15px rgba(0,255,153,0.8)", "0px 0px 25px rgba(0,255,153,1)", "0px 0px 15px rgba(0,255,153,0.8)"] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="absolute left-1/2 w-5 h-5 bg-[#00ff99] rounded-full shadow-[0_0_15px_rgba(0,255,153,1)] transform -translate-x-1/2"
//           ></motion.div>

//           {/* Glassmorphic Card */}
//           <div className="relative w-[40%] p-8 rounded-2xl border border-[#00ff99] bg-gray-800 bg-opacity-40 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,153,0.7)] transition-transform hover:scale-105">
//             <h3 className="text-2xl font-black text-[#00ff99] drop-shadow-md tracking-wide">
//               {step.title}
//             </h3>
//             <p className="mt-3 text-lg text-gray-200 leading-relaxed tracking-wide">
//               {step.description}
//             </p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Timeline;

import React, { useState, useEffect, useRef } from "react"; 
import { motion } from "framer-motion"; 
import { useMediaQuery } from "react-responsive"; 
import AnimatedTitle from "./AnimatedTitle";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef([]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const steps = [
    { title: "Upload Your Design", description: "Start by uploading your design file to Pixora.", side: "left", image: "/upload.png" },
    { title: "AI Analyzes the Design", description: "Pixora's AI analyzes your design for conversion.", side: "right", image: "/Gemini_Generated_Image_p550vup550vup550.jpeg" },
    { title: "Code Generation", description: "Pixora generates production-ready code.", side: "left", image: "/Gemini_Generated_Image_6e6mqs6e6mqs6e6m.jpeg" },
    { title: "Export and Deploy", description: "Export and deploy the code to your platform.", side: "right", image: "/Gemini_Generated_Image_p8terxp8terxp8te.jpeg" },
  ];

  const backgroundTexts = [
   "{ ujjwal }" , "<< Simran >>" , "[ Aditi ]", "// Deploy Instantly //", " -- Fast & Efficient --", "#AI-Powered", "??Seamless Code??",
    "Pixora Magic", "Effortless Development", "Design to Code", "Next-Gen UI",
    "Intelligent Conversion", "Super Fast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="workflow" className="relative overflow-hidden">
      {/* Floating Background Texts */}
      {backgroundTexts.map((text, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.25, scale: 1.2, y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute text-[4rem] font-black text-[#00ff99] opacity-10 z-0 select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: "translate(-50%, -50%)",
            animation: `fadeInOut ${5 + Math.random() * 5}s infinite ease-in-out alternate`,
          }}
        >
          {text}
        </motion.div>
      ))}

      <section className={`px-6 py-16 ${isMobile ? 'block' : 'flex items-center justify-between'} relative`}>
        <div className={`w-full ${isMobile ? '' : 'w-1/2 space-y-8'}`}>
          {/* Use AnimatedTitle here */}
          <AnimatedTitle 
            title="How Pixora Works? <br />" 
            containerClass="mb-8 text-center"
          />

          <motion.p
            className="text-lg text-gray-700 mb-12 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            A step-by-step guide to transforming your designs into code with Pixora.
          </motion.p>

          <div className="relative overflow-x-hidden">
             {/* Vertical Glowing Progress Line */}
             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00ff99] to-transparent opacity-50"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`relative flex items-center w-full my-10 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Glowing Numbered Step Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute left-1/2 w-12 h-12 flex items-center justify-center text-xl font-bold text-black bg-[#00ff99] rounded-full shadow-[0_0_20px_rgba(0,255,153,1)] transform -translate-x-1/2 border-2 border-white"
                >
                  {index + 1}
                </motion.div>

                {/* Step Card */}
                <div className="relative w-[35%] p-6 rounded-2xl border border-[#00ff99] bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <h3 className="relative text-xl font-extrabold text-[#00ff99] tracking-wide z-10">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-lg text-gray-300 leading-relaxed tracking-wide z-10">
                    {step.description}
                  </p>
                  <div className="mt-4">
                    <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg shadow-md" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
