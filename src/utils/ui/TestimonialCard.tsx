"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TestimonialCardProps } from "../types/types";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  company,
  testimonial,
  avtar,
  className = "",
}) => {
  return (
    <motion.div
      className={`relative max-w-sm mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-[300px]  h-[310px] p-[2px] rounded-3xl overflow-hidden text-white shadow-lg ">
        <Image
          src="/assets/cardImg.png"
          alt="Background"
          fill
          className="absolute inset-0 object-cover z-0 "
        />
        <div className="rounded-2xl p-6 h-full relative z-10">
          <div className="flex justify-left mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#9F64FF]/30">
                <Image
                  src={avtar}
                  alt={`${name} avatar`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#9F64FF]/20 to-[#F65BFF]/20 blur-md -z-10"></div>
            </div>
          </div>

          <div className="text-left mb-4 text-white">
            <h3 className="text-lg font-semibold mb-1 text-white">{name}</h3>
            <p className="text-sm text-white">{title}</p>
            {company && <p className="text-xs text-white mt-1">{company}</p>}
          </div>

          <div className="relative flex justify-left">
            <p className="text-gray-300 text-sm leading-relaxed ">
              {testimonial}
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#9F64FF]/5 to-transparent rounded-2xl pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
};