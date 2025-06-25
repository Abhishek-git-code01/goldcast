"use client";

import { FaqEntry } from '@/utils/types/types';
import { FaqItem } from '@/utils/ui/FAQSection';
import React from 'react';

interface FAQListProps {
  faqs: FaqEntry[];
}

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
  return (
    <>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} anshwer={faq.anshwer} />
      ))}
    </>
  );
};

export default FAQList; 