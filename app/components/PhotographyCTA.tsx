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
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top pill button */}
        <div className="text-center mb-8">
          <button className="inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors px-5 py-2 mb-6">
            <span className="typography-small font-medium text-gray-700">
              Initiate Your Journey
            </span>
          </button>
        </div>

        {/* Main heading */}
        <div className="text-center mb-6">
          <h2 className="typography-display mb-4">
            Great photos begin with a conversation
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            Contact us to discuss how we can bring your vision to life with meaningful photography.
          </p>
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
          <button className="inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors px-8 py-4 text-white typography-button">
            Get In Touch
          </button>
        </div>

        {/* Trust statement */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-gray-900 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="typography-small">
            Trusted by 25,000+ clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotographyCTA;

