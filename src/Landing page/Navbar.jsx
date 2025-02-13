import React from "react";
import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";
import { Link } from "react-router-dom";
// import SignInSignUp from "Auth/SignInSignUp";
import { UserButton, useAuth } from '@clerk/clerk-react';

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center items-center px-8 py-4 bg-transparent z-50">
      {/* Navbar Container */}
      <div className="w-[90%] max-w-[1200px] flex justify-between items-center">
        
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
         <AnimatedLogo/>
        </div>

        {/* Center Section: Menu Items */}
        <ul className="hidden md:flex space-x-8 bg-white px-6 py-2 rounded-full">
          {["About Us", "Cases", "Reviews", "Contact Us"].map((item, index) => (
            <motion.li
              key={index}
              className="text-black font-medium cursor-pointer relative hover:text-green-500 transition"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Hover Scale
              whileTap={{ scale: 0.9 }} // Click Shrink
            >
              {item}
              <motion.div
                className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1, transition: { duration: 0.3 } }}
              />
            </motion.li>
          ))}
        </ul>

   {/* Right Section: Buttons */}
   {isSignedIn ? (
        <UserButton 
          afterSignOutUrl="/" 
          className="h-12 w-12 border border-green-400 rounded-full shadow-md hover:opacity-80"
        />
      ) : (
        <Link to="/signin">
          <motion.button
            className="relative overflow-hidden bg-transparent text-black font-semibold px-5 py-2 rounded-full border border-green-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background fill animation */}
            <motion.span
              className="absolute inset-0 z-0"
              initial={{ scaleX: 0, backgroundColor: "rgb(34, 197, 94)" }} // Light Green
              animate={{ scaleX: 1 }}
              whileHover={{ scaleX: 1, backgroundColor: "rgb(16, 185, 129)" }} // Darker Green
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
            
            {/* Button text */}
            <span className="relative z-10 text-white">+ Signup Now</span>
          </motion.button>
        </Link>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
