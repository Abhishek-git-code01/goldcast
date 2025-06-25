"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import bgImg from "../../public/assets/bgImg.svg";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <Image
        src={bgImg}
        alt="Background image"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-xl z-10"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl z-10"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            the future is AI.
          </h1>
        </motion.div>

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Join the network educating enterprise marketing leaders on the
          practical application of AI in their day-to-day work.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#D01EDA] to-[#F65BFF] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/60 rounded-full z-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default HeroSection;