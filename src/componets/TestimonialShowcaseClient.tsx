"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/utils/ui/TestimonialCard";
import { TestimonialCardProps } from "@/utils/types/types";

interface TestimonialShowcaseClientProps {
  testimonials: TestimonialCardProps[];
}

const TestimonialShowcaseClient: React.FC<TestimonialShowcaseClientProps> = ({ testimonials }) => {
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      {/* Title Section - No Background */}
      <div className="bg-black py-16 px-4 ">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What is the AI Marketing Alliance?
          </motion.h1>
        </div>
      </div>

      {/* Description + Testimonials Section - With Background */}
      <div
        className="py-16 px-4 bg-no-repeat bg-center bg-black 2xl:w-screen"
        style={{
          backgroundImage: "url('/assets/testimonilbg.png')",
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
        }}
      >
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4">
          <motion.p
            className="text-sm md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The AI Marketing Alliance is the essential resource and network
            for enterprise marketing leaders driven to integrate artificial
            intelligence into their strategies and operations...
          </motion.p>

          <div className="overflow-hidden relative">
            <div
              className="flex w-max gap-6 group"
              style={{
                animation: "scroll 40s linear infinite",
                animationPlayState: "running",
              }}
            >
              {scrollingTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0 w-[300px]"
                  onMouseEnter={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = "paused";
                  }}
                  onMouseLeave={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = "running";
                  }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialShowcaseClient; 