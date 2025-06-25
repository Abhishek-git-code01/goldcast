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
      className="w-full border-b border-[#6F788880] py-4 mb-0 cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium text-white group-hover:text-white transition">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl font-bold text-white"
        >{isOpen?'-':'+'}
          
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-[#595E68] mt-2 text-base"
          >
            <ul>
              <li>{anshwer}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
