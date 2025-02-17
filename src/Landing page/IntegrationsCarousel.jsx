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
  ];

  return (
    <section className="integrations-section px-4 py-0.5 ">
          <h4 className="text-2xl font-bold text-center text-black text-shadow">
          <TypingEffect
            text={['Pixora Integrations']} // Text you want to show
            speed={100} // Typing speed in ms
            eraseSpeed={50} // Erasing speed in ms (optional)
            eraseDelay={1500} // Delay before erasing (optional)
            typingDelay={500} // Delay before typing starts (optional)
          />
        </h4>
      <div className="marquee-wrapper relative overflow-hidden">
        <motion.div
          className="marquee-content flex gap-8"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: 'linear',
          }}
        >
          {/* List of logos */}
          <ul className="about-partners_logos_list flex gap-8">
            {integrations.map((integration, index) => (
              <li key={index} className="about-partners_logo_list_item">
                <img
                  src={integration.image}
                  alt={integration.alt}
                  className="h-40 w-40 object-contain"
                />
              </li>
            ))}
          </ul>

          {/* Duplicate the list for seamless scrolling */}
          <ul className="about-partners_logos_list flex gap-8">
            {integrations.map((integration, index) => (
              <li key={index} className="about-partners_logo_list_item">
                <img
                  src={integration.image}
                  alt={integration.alt}
                  className="h-40 w-40 object-contain"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsCarousel;
