'use client';

import React from 'react';
import Link from 'next/link'; // Add this import

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <div className="mb-6">
        <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#D01EDA] mx-auto">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        {error?.message || 'An unexpected error has occurred. Please try again.'}
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gradient-to-r from-[#D01EDA] to-[#0ADC7D] rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Try Again
        </button>
        <Link href="/" className="px-6 py-3 bg-gradient-to-r from-[#0ADC7D] to-[#D01EDA] rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition">
          Go Home
        </Link>
      </div>
    </div>
  );
}