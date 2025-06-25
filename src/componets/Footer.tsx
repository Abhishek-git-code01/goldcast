"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <section
      className="relative bg-[#121212] text-white overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      <Image
        src="/assets/fiBG.png"
        alt="Background"
        fill
        priority
        className="object-cover object-right opacity-100 pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the Future
          </h2>
          <p className="text-lg text-white mb-8 leading-relaxed">
            Ready to transform your marketing with AI? Join as a member for
            exclusive access to our content and community, or partner with us to
            shape the future of B2B marketing.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-1 bg-gradient-to-b from-[#F65BFF] to-[#D01EDA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:scale-105"
          >
            Apply for Invite <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
