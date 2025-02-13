import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const GetInTouch = () => {
  const socialLinks = [
    { name: "Github", path: "https://github.com/intellicourse", icon: <FaGithub /> },
    { name: "Twitter", path: "https://twitter.com/intellicourse", icon: <FaTwitter /> },
    { name: "LinkedIn", path: "https://www.linkedin.com/company/intellicourse", icon: <FaLinkedin /> },
    { name: "Instagram", path: "https://www.instagram.com/intellicourse", icon: <FaInstagram /> },
  ];

  const [state, handleSubmit] = useForm("xanqdaok");
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
      if (countdown === 0) {
        clearInterval(timer);
        navigate("/");
      }
      return () => clearInterval(timer);
    }
  }, [state.succeeded, countdown, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-black text-white">
      <motion.h1
        className="text-5xl font-bold text-green-400 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h1>
      <p className="text-gray-400 text-lg mb-6">We'd love to hear from you! Fill out the form below.</p>
      <div className="w-full max-w-lg bg-gray-900 p-6 rounded-xl shadow-xl border border-green-500">
        {state.succeeded ? (
          <div className="text-center">
            <motion.h2 className="text-3xl font-bold text-green-400">Thank You!</motion.h2>
            <p className="text-gray-400 mt-2">Your message has been sent. We'll get back soon.</p>
            <p className="text-gray-500 mt-4">Redirecting in {countdown} seconds...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 bg-black border border-green-400 rounded-lg text-white outline-none focus:border-green-300" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 bg-black border border-green-400 rounded-lg text-white outline-none focus:border-green-300" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 h-32 bg-black border border-green-400 rounded-lg text-white outline-none focus:border-green-300" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" className="w-full py-3 text-lg bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
      <div className="mt-6 flex space-x-4">
        {socialLinks.map((link, index) => (
          <Link key={index} to={link.path} className="text-2xl text-green-400 hover:text-green-500 transition">
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
