import { getTestimonials } from "@/utils/api/getFaq";
import { TestimonialCardProps } from "@/utils/types/types";
import TestimonialShowcaseClient from "./TestimonialShowcaseClient";
import React from "react";
import Link from 'next/link'; // Add this import

export async function TestimonialShowcase() {
  let testimonials: TestimonialCardProps[] = [];
  let error: string | null = null;
  try {
    testimonials = await getTestimonials();
  } catch (e: unknown) { // Change from 'any' to 'unknown'
    error = (e as Error)?.message || 'Failed to load testimonials.';
  }

  if (error) {
    return (
      <div className="w-full bg-black py-24 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-10">Testimonials</h1>
        <div className="bg-[#1a1a1a] rounded-xl p-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#D01EDA]">Error loading testimonials</h2>
          <p className="mb-6 text-gray-300">{error}</p>
          <Link href="/" className="text-[#FF4200] font-semibold inline-flex items-center gap-2">Go Home <span className="ml-1">→</span></Link>
        </div>
      </div>
    );
  }

  return <TestimonialShowcaseClient testimonials={testimonials} />;
}

export default TestimonialShowcase;