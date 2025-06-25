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
      <div className="relative w-[300px] pt-[0.125px] min-h-[310px] h-full rounded-2xl [background-image:linear-gradient(180deg,#ffffff_0%,rgba(102,102,102,0)_30.88%)] text-white shadow-lg bg-top">
        <div className="relative bg-[linear-gradient(180deg,#0B0A2C_25%,#9F64FF_84.35%,#F65BFF_114.02%)] bg-top rounded-2xl min-h-[310px]  h-[98%] pointer-events-none m-[1px] before:content-[''] before:absolute before:top-0 before:bg-black/70 before:z-0 before:size-full before:left-0 before:rounded-2xl">
          {/* <Image
            src="/assets/cardImg.png"
            alt="Background"
            fill
            className="absolute inset-0 object-cover z-0 rounded-2xl"
          /> */}
          <div className="rounded-2xl p-5 h-full relative z-10">
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
              <h3 className="text-lg font-normal mb-1 text-white">{name}</h3>
              <p className="text-sm text-white font-light">{title}</p>
              {company && <p className="text-xs text-white mt-1 font-light">{company}</p>}
            </div>

            <div className="relative flex justify-left">
              <p className=" text-sm leading-relaxed ">
                {testimonial}
              </p>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};