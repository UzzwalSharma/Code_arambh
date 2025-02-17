import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import { Link as ScrollLink } from "react-scroll"; 


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Tagline */}
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <img src="Logo2.jpg" alt="Pixora Logo" className="h-20 w-20 rounded-2xl " />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Pixora
            </h2>
          </div>
          <p className="text-gray-400 mt-2 text-sm">Sketch. Convert. Deploy.</p>
        </div>

    
        
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-gray-300 text-sm">
  <li className="hover:text-green-400 transition-all cursor-pointer">
    <ScrollLink to="home" smooth={true} duration={500} className="text-lg font-bold hover:text-green-400 cursor-pointer">
      Home
    </ScrollLink>
  </li>
  <li className="hover:text-green-400 transition-all cursor-pointer">
    <ScrollLink to="reviews" smooth={true} duration={500} className="text-lg font-bold hover:text-green-400 cursor-pointer">
      Features
    </ScrollLink>
  </li>
  <li className="hover:text-green-400 transition-all cursor-pointer">
    <Link to="/Pricing" className="text-lg font-bold hover:text-green-400 cursor-pointer">
      Pricing
    </Link>
  </li>
  <li className="hover:text-green-400 transition-all cursor-pointer">
    <Link to="/contact" className="text-lg font-bold hover:text-green-400 cursor-pointer">
      Contact
    </Link>
  </li>
</ul>


        {/* Social Media Icons */}
        <div className="flex space-x-8 mt-6 md:mt-0">
          <motion.a whileHover={{ scale: 1.2 }} href="https://x.com/SharmaUjjw10149" className="text-gray-400 hover:text-green-400 transition-all text-3xl">
            <FaTwitter />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ujjwal-sharma-3a1395279" className="text-gray-400 hover:text-green-400 transition-all text-3xl">
            <FaLinkedin />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/UzzwalSharma" className="text-gray-400 hover:text-green-400 transition-all text-3xl">
            <FaGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/ujjwalsharma.jsx/" className="text-gray-400 hover:text-green-400 transition-all text-3xl">
            <FaInstagram />
          </motion.a>
        </div>
      </div>

      {/* Futuristic Glowing Effect */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[80%] h-[2px] bg-green-400 opacity-50 shadow-[0px_0px_15px_#00ff99]"></div>

      {/* Copyright & Fun Shout-out */}
      <p className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Pixora. All rights reserved.
      </p>
      <footer className="text-yellow py-6 mt-auto">
  <div className="flex flex-col justify-center items-center space-y-1">
    <p className="text-sm md:text-base text-center font-bold">
      Built with ❤️, determination, and a lot of CTRL + Z by
      <span className="font-extrabold text-green-400"> Team Syntax Squad</span>
    </p>
    <p className="text-bold text-white text-center">
      If it works, it's magic. If it doesn't, blame Bhupendra Jogi!
    </p>
  </div>
</footer>

    </footer>
  );
};

export default Footer;
