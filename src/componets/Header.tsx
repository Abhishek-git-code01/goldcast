'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = ['Platform', 'Solutions', 'Pricing', 'Customers', 'Events'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-lg backdrop-blur-md"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-14 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-orange-500 text-3xl font-bold">)))</span>
          <span className="text-2xl md:text-xl font-semibold">Goldcast</span>
        </Link>

        <div className="flex items-center justify-end  gap-10 sm:gap-2">
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="md:text-xs lg:text-base text-white/70 hover:text-orange-400">
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2 md:space-x-3">
            <Link
              href="/login"
              className="px-5 py-2 md:text-xs md:px-4 md:py-1.5 min-w-[100px] text-center border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
            <Link
              href="/demo"
              className="px-5 py-2 md:text-xs md:px-4.5 md:py-1.5 min-w-[100px] text-center bg-[#FF4200] text-white rounded-full hover:bg-orange-700 transition"
            >
              Get a Demo
            </Link>
          </div>
        </div>
            
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-white hover:text-orange-400"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-2 pt-4">
            <Link
              href="/login"
              className="w-full text-center px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
            <Link
              href="/demo"
              className="w-full text-center px-5 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
            >
              Get a Demo
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}