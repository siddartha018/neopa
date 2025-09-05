'use client';

import Image from 'next/image';
import React from 'react';

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
  return (
    <section className="flex items-center justify-center py-4">
      <div className="relative h-[95svh] w-[95vw] overflow-hidden rounded-[28px] ">
        <Image
          src="/images/hero1.avif"
          alt="Creative photography helmet blur"
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
              <span className="text-sm">Creative Agency</span>
            </div>

            <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
              {/* Headline */}
              <div className="md:col-span-7 text-white">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Professional Creative
                  <br />
                  Photography
                </h1>
              </div>

              {/* Right subtitle and trust */}
              <div className="md:col-span-5 md:ml-auto flex flex-col items-start md:items-end gap-4 text-white/90">
                <p className="max-w-md text-sm sm:text-base text-right md:text-right">
                  Contemporary architecture, prime locations, and upscale home design to inspire your next journey.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-white/90">Trusted by 25,000+ clients</span>
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

            {/* bottom-left stacked photos */}
            <div className="relative -mb-2 ml-0 mt-6 flex items-end gap-2">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/40 bg-white/10 backdrop-blur">
                <Image src="/images/wed1.avif" alt="sample" fill className="object-cover" />
              </div>
              <div className="relative -ml-4 h-16 w-16 rotate-6 overflow-hidden rounded-lg border border-white/40 bg-white/10 backdrop-blur">
                <Image src="/images/wed2.avif" alt="sample" fill className="object-cover" />
              </div>
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


