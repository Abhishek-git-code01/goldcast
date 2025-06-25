import Image from "next/image";
import { getBlockCards } from "@/utils/api/getFaq";
import { BlockCardItem } from "@/utils/types/types";
import VideoPlayerClient from "./VideoPlayerClient";
import React from "react";

export default async function VideoPlayer() {
  let items: BlockCardItem[] = [];
  let error: string | null = null;
  try {
    items = await getBlockCards();
  } catch (e: any) {
    error = e?.message || 'Failed to load video content.';
  }

  if (error) {
    return (
      <div className="w-full bg-black py-24 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-10">Alliance Video</h1>
        <div className="bg-[#1a1a1a] rounded-xl p-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#D01EDA]">Error loading video content</h2>
          <p className="mb-6 text-gray-300">{error}</p>
          <a href="/" className="text-[#FF4200] font-semibold inline-flex items-center gap-2">Go Home <span className="ml-1">→</span></a>
        </div>
      </div>
    );
  }

  return <VideoPlayerClient items={items} />;
}