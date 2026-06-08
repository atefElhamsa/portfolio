/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6 md:px-20 lg:px-32 relative overflow-hidden"
    >
      {/* Decorative radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.06),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold mb-2">Get In Touch</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white relative inline-block">
            Contact Me
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-indigo-550 rounded" />
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-6 max-w-xl mx-auto">
            Have a project in mind, a job opportunity, or just want to say hello? Drop a message below or reach out via social channels.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Info cards (2 columns on md/lg) */}
          <div className="md:col-span-2 space-y-6">
            {/* Email Card */}
            <div className="group hover-shimmer flex items-center gap-4 bg-slate-900/40 border border-slate-900 hover:border-indigo-500/30 p-5 rounded-2xl shadow-lg transition-all duration-300 hover:bg-slate-900/70 hover:shadow-[0_0_15px_rgba(99,102,241,0.06)] hover:-translate-y-1">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                <FaEnvelope className="text-2xl" />
              </span>
              <div>
                <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Email</h3>
                <a
                  href="mailto:atefelhamsa79@gmail.com"
                  className="text-slate-200 hover:text-indigo-400 font-medium transition-colors break-all text-sm md:text-base"
                >
                  atefelhamsa79@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group hover-shimmer flex items-center gap-4 bg-slate-900/40 border border-slate-900 hover:border-emerald-500/30 p-5 rounded-2xl shadow-lg transition-all duration-300 hover:bg-slate-900/70 hover:shadow-[0_0_15px_rgba(16,185,129,0.06)] hover:-translate-y-1">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors">
                <FaPhone className="text-2xl" />
              </span>
              <div>
                <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Phone</h3>
                <a
                  href="tel:+201552946586"
                  className="text-slate-200 hover:text-emerald-405 font-medium transition-colors text-sm md:text-base"
                >
                  +201552946586
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="group hover-shimmer flex items-center gap-4 bg-slate-900/40 border border-slate-900 hover:border-rose-500/30 p-5 rounded-2xl shadow-lg transition-all duration-300 hover:bg-slate-900/70 hover:shadow-[0_0_15px_rgba(244,63,94,0.06)] hover:-translate-y-1">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500/10 text-rose-450 group-hover:bg-rose-500/20 group-hover:text-rose-400 transition-colors">
                <FaMapMarkerAlt className="text-2xl" />
              </span>
              <div>
                <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Location</h3>
                <p className="text-slate-200 font-medium text-sm md:text-base">Tanta, Egypt</p>
              </div>
            </div>

            {/* Social Grid Card */}
            <div className="hover-shimmer bg-slate-900/30 border border-slate-900/80 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xs text-slate-500 uppercase tracking-[0.2em] mb-4 text-center">Connect with me</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/atef.elhamsa.7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950 border border-slate-900 hover:border-blue-600/50 hover:bg-blue-600/10 hover:text-blue-500 text-slate-400 text-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/atef-elhamsa-1a7199203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950 border border-slate-900 hover:border-sky-505/50 hover:bg-sky-505/10 hover:text-sky-450 text-slate-400 text-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/atefElhamsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-400/50 hover:bg-slate-400/10 hover:text-slate-200 text-slate-400 text-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://wa.me/201552946586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950 border border-slate-900 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-450 text-slate-400 text-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://t.me/+201552946586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950 border border-slate-900 hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-400 text-slate-400 text-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>

          {/* Form (3 columns on md/lg) */}
          <form
            action="https://formspree.io/f/xblajjol"
            method="POST"
            className="md:col-span-3 bg-slate-900/40 border border-slate-900 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6"
          >
            <div className="flex flex-col">
              <label className="mb-2 text-xs font-semibold text-slate-450 uppercase tracking-wider">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-slate-700 text-sm focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-xs font-semibold text-slate-455 uppercase tracking-wider">Email</label>
              <input
                type="email"
                name="_replyto"
                required
                placeholder="Enter your email"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-slate-700 text-sm focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-xs font-semibold text-slate-450 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write your message here..."
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-slate-700 text-sm focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="group w-full py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-550 hover:to-purple-550 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-200 text-sm flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <FaPaperPlane className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
