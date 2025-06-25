'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FaqItemProps {
  question: string;
  anshwer: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, anshwer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full border-gray-300 py-4 cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white group-hover:text-white transition">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl font-bold text-white"
        >
          +
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-[#595E68] mt-2"
          >
            <p>{anshwer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
