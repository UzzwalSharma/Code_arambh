import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <motion.div
      className="flex items-center space-x-3 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Animated Logo Wrapper with Pulsating Border */}
      <motion.div
        className="p-2 rounded-full border-2 border-green-400 relative"
        initial={{ boxShadow: "0px 0px 0px rgba(34, 197, 94, 0.6)" }}
        whileHover={{ boxShadow: "0px 0px 15px rgba(34, 197, 94, 0.8)" }}
        transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.img
          src="/Logo2.jpg"
          alt="Pixora Logo"
          className="h-18 w-auto rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Animated Text */}
      <motion.div
        className="text-white text-2xl font-bold"
        whileHover={{ scale: 1.1, color: "#34D399" }} // Lighter green effect
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Pixora
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;
