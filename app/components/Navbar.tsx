'use client';

import React from 'react';

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
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1 text-2xl font-semibold tracking-wide text-black">
          <span>CATCH</span>
          <span className="relative">UP<sup className="ml-0.5 text-xs align-top">®</sup></span>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-8 text-sm text-gray-800 sm:flex">
          <a href="#" className="transition-colors hover:text-black">Home</a>
          <a href="#" className="transition-colors hover:text-black">Studio</a>
          <a href="#" className="transition-colors hover:text-black">Works</a>
          <a href="#" className="transition-colors hover:text-black">Services</a>
          <a href="#" className="transition-colors hover:text-black">Insights</a>
        </nav>

        {/* CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-4xl bg-emerald-400 px-4 py-1.5 text-[13px] font-medium text-black shadow-sm transition-all hover:shadow md:px-5"
        >
          Contact
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
            <Arrow size={14} />
          </span>
        </a>
      </div>
      <div className="h-px w-full bg-black/5" />
    </header>
  );
};

export default Navbar;


