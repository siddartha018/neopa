'use client';

import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const Corner = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const base = 'absolute h-5 w-5 rounded-md border border-white/50';
  const pos =
    position === 'tl'
      ? 'left-4 top-4 border-b-0 border-r-0'
      : position === 'tr'
      ? 'right-4 top-4 border-b-0 border-l-0'
      : position === 'bl'
      ? 'left-4 bottom-4 border-t-0 border-r-0'
      : 'right-4 bottom-4 border-t-0 border-l-0';
  return <span className={`${base} ${pos}`} aria-hidden="true" />;
};

const Hero = () => {
  const slides = useMemo(
    () => [
      {
        id: 'hero-1',
        src: '/images/hero1.avif',
        alt: 'Creative photography helmet blur',
        eyebrow: 'Creative Agency',
        titleLine1: 'Professional Creative',
        titleLine2: 'Photography',
        subtitle:
          'Contemporary architecture, prime locations, and upscale home design to inspire your next journey.',
        trustedBy: 'Trusted by 25,000+ clients',
      },
      {
        id: 'hero-2',
        src: '/images/hero2.avif',
        alt: 'Abstract portrait with neon lighting',
        eyebrow: 'Brand Studio',
        titleLine1: 'Bold Brands,',
        titleLine2: 'Brighter Stories',
        subtitle:
          'From identity systems to launch campaigns, we craft narratives that resonate and convert.',
        trustedBy: 'Trusted by 10,000+ founders',
      },
      {
        id: 'hero-3',
        src: '/images/hero3.avif',
        alt: 'Vibrant editorial look',
        eyebrow: 'Visual Lab',
        titleLine1: 'Design-led',
        titleLine2: 'Experiences',
        subtitle:
          'Immersive visuals and UI that feel effortless and perform across every device.',
        trustedBy: 'Trusted by 1,200+ teams',
      },
    ],
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Advance slide every 3s; reset timer on selection change for natural cadence
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSelectedIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [selectedIndex, slides.length]);
  const selected = slides[selectedIndex];
  const stacked = slides.filter((_, i) => i !== selectedIndex);
  return (
    <section className="flex items-center justify-center py-4">
      <div className="relative h-[95svh] w-[95vw] overflow-hidden rounded-[28px] ">
        <Image
          src={selected.src}
          alt={selected.alt}
          fill
          sizes="95vw"
          priority
          className="pointer-events-none h-full w-full object-cover "
        />

        {/* subtle overlay */}
        

        {/* content */}
        <div className="absolute inset-0">
          <div className="flex h-full w-full flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16">
            {/* top-left small dot + eyebrow */}
            <div className="flex items-center gap-3 text-white/80">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              <span className="text-sm">{selected.eyebrow}</span>
            </div>

            <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
              {/* Headline */}
              <div className="md:col-span-7 text-white">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  {selected.titleLine1}
                  <br />
                  {selected.titleLine2}
                </h1>
              </div>

              {/* Right subtitle and trust */}
              <div className="md:col-span-5 md:ml-auto flex flex-col items-start md:items-end gap-4 text-white/90">
                <p className="max-w-md text-sm sm:text-base text-right md:text-right">
                  {selected.subtitle}
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-white/90">{selected.trustedBy}</span>
                  <div className="flex items-center gap-4">
                    <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-80">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="transition-opacity hover:opacity-80">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M21.5 3.5l-9 17-3-7-7-3 17-7-7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom-left stacked photos (other slides) */}
            <div className="relative -mb-2 ml-0 mt-6 flex items-end gap-2">
              {stacked.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedIndex(slides.findIndex(sl => sl.id === s.id))}
                  aria-label={`Show slide ${idx + 1}`}
                  className={`relative h-16 w-16 overflow-hidden rounded-lg border border-white/40 bg-white/10 backdrop-blur transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-white/60 ${idx === 1 ? '-ml-4 rotate-6' : ''}`}
                >
                  <Image src={s.src} alt={s.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* corner accents */}
          <Corner position="tl" />
          <Corner position="tr" />
          <Corner position="bl" />
          <Corner position="br" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


