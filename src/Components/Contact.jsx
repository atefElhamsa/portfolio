import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-6 md:px-20 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
              Contact me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <FaEnvelope className="text-indigo-400 text-3xl" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:atefelhamsa79@gmail.com"
                    className="text-gray-300 hover:text-indigo-400 transition"
                  >
                    atefelhamsa79@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <FaPhone className="text-green-400 text-3xl" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a
                    href="tel:+201552946586"
                    className="text-gray-300 hover:text-green-400 transition"
                  >
                    +201552946586
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <FaMapMarkerAlt className="text-red-400 text-3xl" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-300">Tanta, Egypt</p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <a
                  href="https://www.facebook.com/atef.elhamsa.7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition text-3xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/atef-elhamsa-1a7199203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition text-3xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/atefElhamsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition text-3xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <form
              action="https://formspree.io/f/mgvzggbw"
              method="POST"
              className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
            >
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="_replyto"
                  required
                  className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
