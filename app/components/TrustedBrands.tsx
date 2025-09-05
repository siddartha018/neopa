'use client';

import React from 'react';

type BrandItem = {
  label: string;
};

const BRANDS: BrandItem[] = [
  { label: 'sonar' },
  { label: 'liva' },
  { label: 'krona' },
  { label: 'velto' },
  { label: 'sonar' },
  { label: 'lumo' },
  { label: 'kilo' },
];

const Brand = ({ label }: BrandItem) => {
  return (
    <div className="flex items-center gap-2 text-black/70 dark:text-white/80">
      <span className="inline-block h-2 w-2 rounded-full bg-black/30 dark:bg-white/30" />
      <span className="text-lg font-semibold tracking-wide lowercase">{label}</span>
    </div>
  );
};

const TrustedBrands = () => {
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section className="relative bg-neutral-50 py-10 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-6 text-center text-sm font-medium text-neutral-500 dark:text-neutral-400">
          Trusted by Forward-Thinking Brands
        </p>
        <div className="relative overflow-hidden">
          {/* soft gradient edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-950"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-950"
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
            <div className="flex w-max gap-16 pr-16 animate-[marquee-ltr_32s_linear_infinite] motion-reduce:animate-none will-change-transform">
              {marqueeItems.map((item, index) => (
                <Brand key={`${item.label}-${index}`} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;


