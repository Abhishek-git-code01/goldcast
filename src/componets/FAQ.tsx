import { getFaqs } from '@/utils/api/getFaq';
import { FaqEntry } from '@/utils/types/types';
import FAQList from './FAQList';
import Link from 'next/link';
import React from 'react';

export default async function FAQ() {
  let faqs: FaqEntry[] = [];
  let error: string | null = null;
  try {
    faqs = await getFaqs();
  } catch (e: any) {
    error = e?.message || 'Failed to load FAQs.';
  }

  if (error) {
    return (
      <div className="w-full bg-[#010101] py-24 px-6 sm:px-10 md:px-20 lg:px-24 text-center text-white">
        <h1 className="text-4xl font-bold mb-10">Hybrid event platform FAQs</h1>
        <div className="bg-[#1a1a1a] rounded-xl p-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#D01EDA]">Error loading FAQs</h2>
          <p className="mb-6 text-gray-300">{error}</p>
          <Link href="/" className="text-[#FF4200] font-semibold inline-flex items-center gap-2">Go Home <span className="ml-1">→</span></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#010101] py-24 px-6 sm:px-10 md:px-20 lg:px-24">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10 text-white">Hybrid event platform FAQs</h1>

        <div className="space-y-6 text-left">
          <FAQList faqs={faqs} />
        </div>

        <div className="mt-12 text-left">
          <Link href="/" className="text-white underline block mb-2">More questions?</Link>
          <Link href="/" className="text-[#FF4200] font-semibold gap-5 inline-flex items-center">
            Visit Help Center <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
