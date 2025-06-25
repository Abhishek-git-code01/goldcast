"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { BlockCardItem } from "@/utils/types/types";
import {motion} from 'framer-motion'

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
      <div className="pt-10 pb-24 px-6 sm:px-8 md:px-20 lg:px-24 relative z-10 after:content-[''] after:absolute after:-top-25 after:bg-black after:z-0 after:h-[500px] after:w-[calc(100%+40px)] after:-left-10 after:blur-lg">
        <div className="relative max-w-5xl mx-auto text-center mb-16 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who is the Alliance for ?
          </h2>
          <p className="max-w-3xl mx-auto text-base">
            The Alliance is designed for marketing executives in
            enterprise-sized organizations across all industry verticals.
            Joining will allow you not just to stay current, but to actively
            shape the future of marketing in your organization; empowering your
            team to drive both pipeline and productivity.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto z-10">
          <div className="pb-12">
            <div
              className="relative mb-20 rounded-2xl p-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 16.45%, #D01EDA 89.69%, #0ADC7D 100%)",
              }}
            >
              <div className="bg-black rounded-2xl overflow-hidden">
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
                    className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl cursor-pointer"
                  >
                    <div className="w-24 h-24 relative">
                      <Image
                        src="/assets/ring.png"
                        alt="Outer Ring"
                        width={96}
                        height={96}
                        className="w-full h-full rounded-full"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-10 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center translate-x-[4px]">
                          <Image
                            src="/assets/play.png"
                            alt="Play Button"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold my-12 text-center">
            What do alliance members get?
          </h2>

          <motion.div 
               

          className="max-w-4xl  mx-auto grid gap-7 md:grid-cols-3">
            {items.map((item, idx) => (
               <motion.div
                whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255, 165, 0, 0.8)' }}
                key={idx}
                className="relative rounded-2xl [background-image:linear-gradient(180deg,#ffffff_0%,rgba(102,102,102,0)_30.88%)] bg-clip-padding "
              >
                <div className=" flex items-start justify-start bg-[linear-gradient(180deg,#0B0A2C_25%,#0ADC7D_122.78%)] rounded-2xl m-[1px] p-6 h-full">
                  <div className="absolute w-60 h-80 bg-black rounded-full blur-2xl opacity-90" />

                  <div className="relative z-10 flex flex-col space-y-4">
                    <motion.div className="w-12 h-12 "
                     whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255, 165, 0, 0.8)' }}
                    >
                      
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold leading-snug md:text-xs">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text- md:text-xs sm:text-sm ">
                      {item.descripton}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
