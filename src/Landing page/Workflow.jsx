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

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef([]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const steps = [
    { title: "Upload Your Design", description: "Start by uploading your design file to Pixora.", side: "left", image: "/upload.jpg" },
    { title: "AI Analyzes the Design", description: "Pixora's AI analyzes your design for conversion.", side: "right", image: "/analysis.jpg" },
    { title: "Code Generation", description: "Pixora generates production-ready code.", side: "left", image: "/code.jpg" },
    { title: "Export and Deploy", description: "Export and deploy the code to your platform.", side: "right", image: "/deploy.jpg" },
  ];

  const backgroundTexts = [
   "ujjwal" , "Simran" , "Aditi", "Deploy Instantly", "Fast & Efficient", "AI-Powered", "Seamless Code",
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
          <motion.h2
            className="text-4xl font-extrabold mb-8 text-center text-[#202121]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            How <span className="text-green-400">Pixora</span> Works?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mb-12 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            A step-by-step guide to transforming your designs into code with Pixora.
          </motion.p>

          <div className="relative overflow-x-hidden">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`relative flex items-center w-full my-10 ${step.side === "left" ? "justify-start" : "justify-end"}`}
              >
                {/* Glowing Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-1/2 top-[50%] w-[2px] bg-[#00ff99] h-full z-0"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      boxShadow: [
                        "0 0 10px rgba(0, 255, 153, 0.6), 0 0 20px rgba(0, 255, 153, 0.8)",
                        "0 0 15px rgba(0, 255, 153, 1), 0 0 30px rgba(0, 255, 153, 1.2)",
                        "0 0 10px rgba(0, 255, 153, 0.6), 0 0 20px rgba(0, 255, 153, 0.8)"
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      filter: "drop-shadow(0px 0px 10px #00ff99) brightness(1.3)",
                    }}
                  ></motion.div>
                )}

                {/* Glowing Step Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute left-1/2 w-6 h-6 bg-[#00ff99] rounded-full shadow-[0_0_20px_rgba(0,255,153,1)] transform -translate-x-1/2"
                ></motion.div>

                {/* Step Card */}
                <div className="relative w-[30%] p-6 rounded-2xl border border-[#00ff99] bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-r opacity-30"
                  ></motion.div>

                  <h3 className="relative text-xl font-extrabold text-[#00ff99] drop-shadow-lg tracking-wide z-10">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-lg text-gray-200 leading-relaxed tracking-wide z-10">
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

















