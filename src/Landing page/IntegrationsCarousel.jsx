import React from 'react';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <h4 className="text-2xl font-bold text-center text-black  text-shadow">Pixora Integrations</h4>
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
                  className="h-28 w-28 object-contain"
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
                  className="h-28 w-28 object-contain"
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
