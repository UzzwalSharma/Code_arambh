import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ebfff2] p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full flex">
        {/* Left Side - Contact Form */}
        <div className="w-1/2 pr-6">
          <h2 className="text-4xl font-extrabold text-green-500">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            We are here for you! How can we help?
          </p>

          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>

            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
              Submit
            </button>
            <Link to="/" className="w-full">
  <button className="w-full mt-3.5 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
   
    Back to Home <FaHome className="text-xl" />
  </button>
</Link>
          </form>
        </div>

        {/* Right Side - Illustration & Contact Info */}
        <div className="w-1/2 flex flex-col items-center">
          <img
            src="/marketing-concept-with-laptop.png" // Use an appropriate illustration
            alt="Contact Us"
            className="w-80 mb-6"
          />

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-500 text-3xl" />
              <p>Ghaziabad, UttarPradesh</p>
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
            <a href="#" className="text-neon-green text-3xl hover:text-green-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-neon-green text-3xl hover:text-green-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-neon-green text-3xl hover:text-green-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-neon-green text-3xl hover:text-green-400 transition">
              <FaLinkedin />
            </a>
          </div>
          </div>
        
        </div>
        
      </div>
    </div>
  );
}
