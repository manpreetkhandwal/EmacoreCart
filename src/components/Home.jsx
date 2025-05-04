import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="h-screen bg-gradient-to-br from-sky-600 to-cyan-400 relative overflow-hidden text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("https://via.placeholder.com/1500")' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-6">
        {/* Subtitle */}
        <motion.div
          className="uppercase tracking-widest text-sm md:text-base text-gray-200 mb-4 flex items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="w-10 h-[2px] bg-white"></span>
          Hot Trend
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight md:leading-[1.2] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Fresh Fashion Finds
          <br />
          <span className="font-light text-gray-100">New Collection</span>
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/category"
            className="inline-block bg-white text-sky-700 font-semibold uppercase tracking-wide px-8 py-3 rounded-md shadow-md hover:bg-transparent hover:text-white border border-white transition duration-300"
          >
            Discover More
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
