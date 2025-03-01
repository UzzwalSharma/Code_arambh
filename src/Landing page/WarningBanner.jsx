import { motion } from "framer-motion";
import "./WarningBanner.css"; // Custom styles for premium neon effect

const WarningBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="warning-banner"
    >
      <div className="holographic-frame">
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="warning-icon"
        >
          ⚠️
        </motion.span>
        <h2 className="warning-text">
          <span className="glow-text">⚡ PIXORA ALERT ⚡</span>
          <motion.span
            animate={{
              opacity: [1, 0.5, 1],
              x: [-2, 2, -2],
            }}
            transition={{ repeat: Infinity, duration: 0.2 }}
            className="glitch"
          >
            DARK ZONE ACTIVATED – AI MODE ENGAGED
          </motion.span>
        </h2>
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="warning-icon"
        >
          ⚠️
        </motion.span>
      </div>
      <motion.div
        className="scanline"
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
    </motion.div>
  );
};

export default WarningBanner;
