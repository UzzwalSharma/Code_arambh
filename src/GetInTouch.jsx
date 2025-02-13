import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xanqdaok");
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            navigate("/");
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [state.succeeded, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ebfff2] p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full flex">
        {/* Left Side - Contact Form */}
        <div className="w-1/2 pr-6">
          <h2 className="text-4xl font-extrabold text-green-500">Get in Touch</h2>
          <p className="text-gray-600 mt-2">We are here for you! How can we help?</p>
          {state.succeeded ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400">Thank You!</h2>
              <p className="text-gray-400 mt-2">Your message has been sent successfully.</p>
              <p className="text-gray-500">Redirecting in {countdown} seconds...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg text-black outline-none focus:border-green-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-lg text-black outline-none focus:border-green-400"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 h-32 bg-transparent border border-gray-500 rounded-lg text-black outline-none focus:border-green-400"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button
                type="submit"
                className="w-full py-3 bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold text-white"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <Link to="/" className="w-full block mt-4">
            <button className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Back to Home <FaHome className="text-xl" />
            </button>
          </Link>
        </div>

        {/* Right Side - Illustration & Contact Info */}
        <div className="w-1/2 flex flex-col items-center">
          <img
            src="/marketing-concept-with-laptop.png"
            alt="Contact Us"
            className="w-80 mb-6"
          />

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-500 text-3xl" />
              <p>Ghaziabad, Uttar Pradesh</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-green-500 text-3xl" />
              <p>+91 7505696519</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-green-500 text-3xl" />
              <p>uzzwal7505@gmail.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-green-500 text-3xl hover:text-green-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-green-500 text-3xl hover:text-green-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-green-500 text-3xl hover:text-green-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-green-500 text-3xl hover:text-green-400 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
