import React from 'react';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TypingEffect from 'react-typing-effect';

const IntegrationsCarousel = () => {
  const integrations = [
    { image: "/vs code.png", alt: "VS Code" },
    { image: "/github.png", alt: "GitHub" },
    { image: "/figma.png", alt: "Figma" },
    { image: "/react.png", alt: "React" },
    { image: "/html.png", alt: "HTML" },
    { image: "/css.png", alt: "CSS" },
    { image: "/tailwind.png", alt: "Tailwind" },
    { image: "/gitlab.png", alt: "GitLab" },
    { image: "/bootstrap.png", alt: "BootStrap" },
  ];

  return (
    <section className="integrations-section px-4 py-4">
      <h4 className="text-2xl font-bold text-center text-black text-shadow flex items-center justify-center space-x-2">
        <TypingEffect
          text={['Pixora Integrations']} // Text you want to show
          speed={100} // Typing speed in ms
          eraseSpeed={50} // Erasing speed in ms (optional)
          eraseDelay={1500} // Delay before erasing (optional)
          typingDelay={500} // Delay before typing starts (optional)
        />
        <img src="/edit_15568281.gif" alt="Editing Icon" className="w-12 h-12" />
      </h4>

      <div className="marquee-wrapper relative overflow-hidden">
        <motion.div
          className="marquee-content flex gap-8"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {/* List of logos */}
          <ul className="about-partners_logos_list flex gap-8">
            {integrations.map((integration, index) => (
              <li key={index} className="about-partners_logo_list_item">
                <motion.div
                  className="logo-container relative w-25 h-25 bg-white rounded-xl shadow-xl flex items-center justify-center overflow-hidden transition-transform duration-300 transform-gpu border-4 border-transparent"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                    borderColor: "#00FF00", // Pixora green glow effect
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                >
                  <img
                    src={integration.image}
                    alt={integration.alt}
                    className="h-24 w-24 object-contain transition-transform duration-300 transform-gpu hover:scale-110"
                  />
                </motion.div>
              </li>
            ))}
          </ul>

          {/* Duplicate the list for seamless scrolling */}
          <ul className="about-partners_logos_list flex gap-8">
            {integrations.map((integration, index) => (
              <li key={index} className="about-partners_logo_list_item">
                <motion.div
                  className="logo-container relative w-25 h-25 bg-white rounded-xl shadow-xl flex items-center justify-center overflow-hidden transition-transform duration-300 transform-gpu border-4 border-transparent"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                    borderColor: "#00FF00", // Pixora green glow effect
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                >
                  <img
                    src={integration.image}
                    alt={integration.alt}
                    className="h-24 w-24 object-contain transition-transform duration-300 transform-gpu hover:scale-110"
                  />
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsCarousel;
