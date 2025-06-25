'use client';

import Image from 'next/image';

const logos = [
  { src: '/logos/goldcast.png', alt: 'Goldcast' },
  { src: '/logos/sendoso.png', alt: 'Sendoso' },
  { src: '/logos/6Sense.png', alt: '6sense' },
  { src: '/logos/id.png', alt: 'Intelligent Demand' },
];

export default function Marque() {
  return (
    <div className="bg-black py-8">
      <h2 className="text-center text-gray-500 text-lg font-medium mb-6">
        BROUGHT TO YOU BY
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex animate-slide space-x-12 w-max">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-[200px] h-16">
              <Image src={logo.src} alt={logo.alt} width={160} height={40} className="object-contain grayscale" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

