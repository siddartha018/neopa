'use client';

import React from 'react';
import Image from 'next/image';

const Arrow = ({ size = 12 }: { size?: number }) => (
  <span className="inline-flex items-center justify-center rounded-full " style={{ width: size, height: size }}>
    <svg
      width={size - 2}
      height={size - 2}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
      style={{ transform: 'rotate(-45deg)' }}
    >
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Navbar = () => {
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 w-[min(92vw,1000px)]">
      {/* Outer frame for subtle outline */}
      <div className="pointer-events-auto rounded-3xl border border-neutral-400/40 bg-neutral-500/20 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md">
        {/* Main bar */}
        <div className="flex items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-gradient-to-r from-neutral-900/90 via-neutral-800/90 to-neutral-700/90 px-3 py-2 sm:px-4 sm:py-3">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-2xl ring-1 ring-white/15 sm:h-14 sm:w-14">
              <Image
                src="/images/ni1.avif"
                alt="Avatar"
                width={80}
                height={80}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden flex-1 items-center justify-center gap-6 text-[11px] font-semibold uppercase tracking-wider text-gray-200 sm:flex">
            <a href="#" className="transition-colors hover:text-white">Home</a>
            <a href="#" className="transition-colors hover:text-white">About</a>
            <a href="#" className="transition-colors hover:text-white">Projects</a>
            <a href="#" className="transition-colors hover:text-white">Journal</a>
          </nav>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-2 text-[13px] font-semibold text-gray-900 shadow-sm transition-transform hover:scale-[1.02] sm:px-5 sm:py-2.5"
          >
            Contact
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-white">
              <Arrow size={12} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


