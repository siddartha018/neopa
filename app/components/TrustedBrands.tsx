'use client';

import React from 'react';

type BrandItem = {
  src: string;
  alt?: string;
};

const BRANDS: BrandItem[] = [
  { src: '/images/br1.png', alt: 'Brand 1' },
  { src: '/images/br2.webp', alt: 'Brand 2' },
  { src: '/images/br3.png', alt: 'Brand 3' },
  { src: '/images/br4.webp', alt: 'Brand 4' },
  { src: '/images/br5.png', alt: 'Brand 5' },
  { src: '/images/br6.webp', alt: 'Brand 6' },
];

const Brand = ({ src, alt }: BrandItem) => {
  return (
    <div className="flex items-center text-black">
      <span className="inline-block h-16 w-40">
        <img
          src={src}
          alt={alt || 'Brand logo'}
          className="h-16 w-40 object-contain"
          loading="lazy"
        />
      </span>
    </div>
  );
};

const TrustedBrands = () => {
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section className="relative bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-6 text-center text-sm font-medium text-black">
          Trusted by Forward-Thinking Brands
        </p>
        <div className="relative overflow-hidden">
          {/* soft gradient edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"
            aria-hidden="true"
          />

          <div
            className="relative"
            style={{
              // Extra safety for browsers supporting CSS masks
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div className="flex w-max gap-20 pr-20 animate-[marquee-ltr_32s_linear_infinite] motion-reduce:animate-none will-change-transform">
              {marqueeItems.map((item, index) => (
                <Brand key={`${item.src}-${index}`} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
