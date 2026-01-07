'use client';

import React from 'react';
import Image from 'next/image';

const PhotographyCTA = () => {
  // Images for the marquee - using available images from the project
  const marqueeImages = [
    { src: '/images/hero1.avif', alt: 'Portrait photography' },
    { src: '/images/hero2.avif', alt: 'Abstract photography' },
    { src: '/images/hero3.avif', alt: 'Lifestyle photography' },
    { src: '/images/hero4.avif', alt: 'Creative photography' },
    { src: '/images/wed1.avif', alt: 'Wedding photography' },
    { src: '/images/wed2.avif', alt: 'Event photography' },
    { src: '/images/ni1.avif', alt: 'Editorial photography' },
    { src: '/images/ni2.avif', alt: 'Brand photography' },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...marqueeImages, ...marqueeImages];

  return (
    <section id="contact" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top pill button */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-full bg-gray-100 px-5 py-2 mb-6">
            <span className="typography-eyebrow">
              Work With Us
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-6">
          <h2 className="typography-display mb-4">
            Let&apos;s Build Something That Lasts
          </h2>
          <p className="max-w-2xl mx-auto typography-body mb-8">
            We are best for teams who want a strategic partner, value clarity and accountability, 
            and are building for long term growth.
          </p>
          
          {/* Who we work with */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="typography-title mb-2">Brands</p>
              <p className="typography-small">Building community, not just reach</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="typography-title mb-2">Founders</p>
              <p className="typography-small">Preparing for sustainable growth</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="typography-title mb-2">Companies</p>
              <p className="typography-small">Tired of disconnected agencies</p>
            </div>
          </div>
        </div>

        {/* Marquee of images */}
        <div className="relative w-full overflow-hidden mb-10 py-4">
          <div className="flex animate-marquee gap-4 will-change-transform">
            {duplicatedImages.map((image, index) => (
              <div
                key={`marquee-${index}`}
                className="relative flex-shrink-0 w-[280px] h-[200px] md:w-[320px] md:h-[240px] rounded-lg overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* CTA Button */}
        <div className="text-center mb-6">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors px-8 py-4 text-white typography-button"
          >
            Start a Conversation
          </a>
        </div>

        {/* Trust statement */}
        <div className="text-center">
          <p className="typography-body text-gray-600">
            A people first media agency delivering strategy, storytelling, and scalable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotographyCTA;

