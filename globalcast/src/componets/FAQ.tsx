'use client';

import { getFaqs } from '@/utils/api/getFaq';
import { FaqEntry } from '@/utils/types/types';
import { FaqItem } from '@/utils/ui/FAQSection';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFaqs();
      setFaqs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-[#010101] py-24 px-6 sm:px-10 md:px-20 lg:px-24">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10 text-white">Hybrid event platform FAQs</h1>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} anshwer={faq.anshwer} />
          ))}
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
};

export default FAQ;
