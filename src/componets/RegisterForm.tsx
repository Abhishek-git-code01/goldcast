'use client';

import Image from 'next/image';

export default function RegisterForm() {
  return (
    <section className="relative min-h-screen text-white flex flex-col items-center justify-center px-4 py-12 overflow-hidden pt-60 -mt-30">
      {/* Background Image */}
      <Image
        src="/gridBG.png"
        alt="Grid Background"
        fill
        priority
        className="object-cover w-full h-full pointer-events-none z-0"
      />

      {/* Overlay (optional for darkness) */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-10">Register</h1>

        <div className="w-full max-w-md bg-[linear-gradient(to_bottom,_#FFFFFF,_#D01EDA,_#0ADC7D)] p-[1px] rounded-2xl">
          <div className="bg-black rounded-[inherit] p-6">
            <h2 className="text-xl mb-6">Sign Up</h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-5 py-4 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-5 py-4 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Work Email*"
                className="w-full px-5 py-4 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Title"
                className="w-full px-5 py-4 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-5 py-4 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-b from-[#F65BFF] to-[#D01EDA] text-white text-lg font-medium py-4 rounded-xl hover:scale-105 transition shadow-lg"
              >
                Apply for Invite
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}