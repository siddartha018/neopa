'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Arrow = ({ size = 12 }: { size?: number }) => (
  <span className="inline-flex items-center justify-center rounded-full " style={{ width: size, height: size }}>
    <svg
      width={size - 2}
      height={size - 2}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-900"
      style={{ transform: 'rotate(-45deg)' }}
    >
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(92vw,1000px)]">
      {/* Main bar */}
      <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-2xl bg-gray-900/80 backdrop-blur-lg px-4 py-3 sm:px-6 sm:py-3.5 shadow-lg border border-gray-700/30">
          {/* Logo/Avatar */}
          <div className="flex items-center gap-3">
            <span className="text-white text-lg font-bold tracking-tight uppercase select-none">SOCIAL MONKS</span>
          </div>

          {/* Nav links - Desktop */}
          <nav className="hidden flex-1 items-center justify-center gap-6 typography-eyebrow-white sm:flex">
            <a href="#home" className="transition-colors hover:text-white">Home</a>
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#how-we-work" className="transition-colors hover:text-white">How We Work</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* CTA - Desktop */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/30 bg-transparent px-5 py-2 typography-button text-white transition-all hover:bg-white/10 hover:border-white/50"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-2 rounded-xl bg-gray-900/95 backdrop-blur-lg border border-gray-700/30 p-4 shadow-lg">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="typography-eyebrow-white py-2 transition-colors hover:text-white"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="typography-eyebrow-white py-2 transition-colors hover:text-white"
              >
                Services
              </a>
              <a
                href="#how-we-work"
                onClick={() => setIsMenuOpen(false)}
                className="typography-eyebrow-white py-2 transition-colors hover:text-white"
              >
                How We Work
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="typography-eyebrow-white py-2 transition-colors hover:text-white"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-4 py-2 typography-button text-white mt-2 hover:bg-white/10"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
    </div>
  );
};

export default Navbar;


