import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: 'What is Pixora?', answer: 'Pixora is an AI-powered UI transformer that converts wireframes into production-ready code.' },
    { question: 'How does it work?', answer: 'It takes hand-drawn sketches or digital wireframes and transforms them into responsive code.' },
    { question: 'Who can use Pixora?', answer: 'Pixora is designed for developers, designers, and non-tech users who need quick, clean code.' },
    { question: 'What technologies does it support?', answer: 'Pixora supports React, Tailwind CSS, HTML, and CSS.' },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-12 px-6 md:px-16">
      {/* Left Side: Video */}
      <div className="w-full md:w-1/2 flex justify-center">
        <video autoPlay loop muted className="w-full max-w-lg rounded-lg shadow-lg">
          <source src="/6994812_Virtual Reality_Cyber_3840x2160.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Side: FAQ Accordion */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-green-400 rounded-lg p-4 bg-gray-900 transition-all duration-300">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <motion.span
                  className="text-green-400 text-2xl"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? '−' : '+'}
                </motion.span>
              </div>
              
              {/* Smooth Opening & Closing Animation */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    className="mt-2 text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
