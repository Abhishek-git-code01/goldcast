"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { BlockCardItem } from "@/utils/types/types";

interface VideoPlayerClientProps {
  items: BlockCardItem[];
}

export default function VideoPlayerClient({ items }: VideoPlayerClientProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative bg-contain bg-[radial-gradient(168.51%_169.35%_at_50%_139.22%,#0ADC7D_19%,#4E02F1_48%,#D01EDA_73.41%,rgba(0,0,0,0)100%)] text-white pt-16 before:content-[''] before:absolute before:top-0 before:bg-black/80 before:z-0 before:size-full before:left-0 after:content-[''] after:absolute after:bottom-0 after:bg-black after:z-0 after:h-[250px] after:w-full after:left-0 after:blur-xl">
      <div className="relative z-10 after:content-[''] after:absolute after:-top-25 after:bg-black after:z-0 after:h-[500px] after:w-[calc(100%+40px)] after:-left-10 after:blur-lg">
        <div className="relative max-w-5xl mx-auto text-center mb-16 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who is the Alliance for ?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            The Alliance is designed for marketing executives in
            enterprise-sized organizations across all industry verticals.
            Joining will allow you not just to stay current, but to actively
            shape the future of marketing in your organization; empowering your
            team to drive both pipeline and productivity.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto z-10">
          <div className="relative overflow-hidden bg-black rounded-2xl border border-white/20 mb-20">
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls={isPlaying}
              preload="metadata"
              poster="/video-placeholder.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/50"
              >
                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.732z"
                    />
                  </svg>
                </div>
              </button>
            )}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold my-12 text-center">
            What do alliance members get?
          </h2>

          <div className="max-w-4xl mx-auto grid gap-7 md:grid-cols-3">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl [background-image:linear-gradient(180deg,#ffffff_0%,rgba(102,102,102,0)_30.88%)] bg-clip-padding "
              >
                <div className=" flex items-center justify-center bg-[linear-gradient(180deg,#0B0A2C_25%,#0ADC7D_122.78%)] rounded-2xl m-[1px] p-6 h-full">
                  <div className="absolute w-60 h-80 bg-black rounded-full blur-2xl opacity-90" />

                  <div className="relative z-10 flex flex-col space-y-4">
                    <div className="w-12 h-12">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {item.descripton}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 