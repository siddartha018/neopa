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

// Helper to check if src is external
const isExternalImage = (src: string) => /^https?:\/\//.test(src);

const Hero = () => {
  const slides = useMemo(
    () => [
      {
        id: 'hero-1',
        src: '/nimages/im1.png',
        alt: 'Media agency strategy',
        eyebrow: 'Media Agency',
        titleLine1: 'We Build Media People Care About',
        titleLine2: 'and Businesses Grow From.',
        subtitle:
          'A people first media agency combining cultural insight, strategy, and performance to turn attention into long term growth.',
        trustedBy: 'Trusted by brands building community',
      },
      {
        id: 'hero-2',
        src: '/nimages/im8.png',
        alt: 'Strategy meets culture',
        eyebrow: 'Where Strategy Meets Culture',
        titleLine1: 'Media Built for People.',
        titleLine2: 'Growth Built to Last.',
        subtitle:
          'Strategy, culture, and performance working as one system. We help brands stay human while scaling intelligently.',
        trustedBy: 'Trusted by founders preparing for growth',
      },
      {
        id: 'hero-3',
        src: 'https://images.unsplash.com/photo-1505739998589-00fc191ce01d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // ^^^ Fixes the url: must be a direct image URL, not an Unsplash page
        alt: 'People-first media',
        eyebrow: 'People First Media',
        titleLine1: 'Algorithms Change.',
        titleLine2: 'People Don\'t.',
        subtitle:
          'We build media around human behavior, not hacks. Media that earns attention, builds trust, and drives meaningful growth.',
        trustedBy: 'Trusted by companies tired of disconnected agencies',
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

  // Safe render for <Image> if src external: use unoptimized for next/image, or fallback to <img>
  function RenderImage(props: { src: string, alt: string, fill?: boolean, className?: string, priority?: boolean, sizes?: string }) {
    if (isExternalImage(props.src)) {
      // Use next/image with unoptimized for external images, or fallback to <img> if issues
      return (
        <Image
          src={props.src}
          alt={props.alt}
          fill={props.fill}
          sizes={props.sizes}
          priority={props.priority}
          className={props.className}
          unoptimized
        />
      );
    }
    // Internal images are fine
    return (
      <Image
        src={props.src}
        alt={props.alt}
        fill={props.fill}
        sizes={props.sizes}
        priority={props.priority}
        className={props.className}
      />
    );
  }

  return (
    <section id="home" className="flex items-center justify-center py-4">
      <div className="relative h-[95svh] w-[95vw] overflow-hidden rounded-[28px] ">
        <RenderImage
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
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              <span className="typography-small-white-80">{selected.eyebrow}</span>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              {/* Headline */}
              <div className="md:col-span-8">
                <h1 className="typography-display-white mb-6">
                  {selected.titleLine1}
                  <br />
                  {selected.titleLine2}
                </h1>
                <p className="max-w-2xl typography-body-white-90 mb-8">
                  {selected.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 typography-button text-gray-900 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
                  >
                    Work With Us
                  </a>
                  <a
                    href="#how-we-work"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 typography-button text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                  >
                    See How We Work
                  </a>
                </div>
              </div>

              {/* Right trust indicator */}
              <div className="md:col-span-4 md:ml-auto flex flex-col items-start md:items-end gap-4">
                <span className="typography-small-white-90">{selected.trustedBy}</span>
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
                  <RenderImage src={s.src} alt={s.alt} fill className="object-cover" />
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

