'use client';

import React from 'react';

// Use Next.js Image if available, otherwise fallback to <img>
import Image from 'next/image';

// const Pill = ({ children }: { children: React.ReactNode }) => (
//   <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700">{children}</span>
// );

const ArrowPill = ({ label }: { label: string }) => (
  <button className="group inline-flex items-center gap-2 rounded-4xl bg-black px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-gray-800">
    {label}
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black"
        style={{ transform: 'rotate(-45deg)' }}
      >
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </button>
);

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-200 to-gray-300">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(min-width: 1024px) 33vw, 100vw"
      priority={false}
    />
  </div>
);

// Fills the parent's height entirely
const ImgFill = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-200 to-gray-300">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(min-width: 1024px) 33vw, 100vw"
      priority={false}
    />
  </div>
);

const Card = ({ title, desc, imgSrc }: { title: string; desc: string; imgSrc: string }) => (
  <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
    <Img src={imgSrc} alt={title} />
    <div className="px-2 pb-3 pt-2">
      <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-[12px] leading-relaxed text-gray-600">{desc}</p>
    </div>
  </div>
);

const WhatWeDo = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header row */}
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-gray-400" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500">What we do</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Creative Services That Build Brands, Experiences, and Visual Stories
            </h2>
          </div>
          <div className="max-w-xs md:text-right">
            <p className="text-[12px] leading-relaxed text-gray-600">
              A creative partner for bold ideas — blending strategy, design, code, and visual storytelling.
            </p>
            <div className="mt-3 md:justify-end">
              <ArrowPill label="Our Services" />
            </div>
          </div>
        </div>

        {/* Cards grid using flexbox with explicit row/column placement */}
        <div className="flex flex-col gap-4">
          {/* Row 1: three cards */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <Card
                title="Branding"
                desc="Bold, strategic identities that define and differentiate your brand."
                imgSrc="/images/wed1.avif"
              />
            </div>
            <div className="flex-1">
              <Card
                title="Design"
                desc="Intuitive and modern design that captures attention and enhances user experience."
                imgSrc="/images/wed2.avif"
              />
            </div>
            <div className="flex-1">
              <Card
                title="Development"
                desc="We build fast, responsive websites that perform beautifully across all devices."
                imgSrc="/images/wed3.avif"
              />
            </div>
          </div>

          {/* Row 2: left tall card + middle two stacked blocks + right tall image */}
          <div className="flex flex-col gap-4 md:h-[420px] md:flex-row">
            {/* Left tall content card */}
            <div className="flex-1">
              <div className="flex h-auto md:h-full flex-col overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
                <div className="h-56 md:h-2/3">
                  <ImgFill src="/images/wed4.avif" alt="Photography" />
                </div>
                <div className="px-2 pb-3 pt-2">
                  <h3 className="text-[15px] font-semibold text-gray-900">Photography</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-gray-600">
                    Striking visual content that tells your brand story with clarity and style.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle column: image over green CTA */}
            <div className="flex-1">
              <div className="flex h-auto md:h-full flex-col gap-4">
                <div className="h-56 md:flex-1 overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
                  <ImgFill src="/images/wed5.avif" alt="Campaign montage" />
                </div>
                <div className="h-44 md:flex-1 overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
                  <div className="flex h-full flex-col justify-between rounded-xl bg-emerald-200 p-5">
                    <p className="text-[13px] font-medium text-gray-900">
                      Whether you&quot;re starting from scratch or looking to elevate your brand, we&apos;re here to create something impactful — together.
                    </p>
                    <div className="pt-4">
                      <ArrowPill label="Let&apos;s Connect" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right tall image */}
            <div className="flex-1">
              <div className="h-64 md:h-full overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
                <ImgFill src="/images/wed6.avif" alt="Portrait collage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
