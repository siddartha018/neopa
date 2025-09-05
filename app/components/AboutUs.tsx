'use client';

import React from 'react';

// const StatTile = ({ value, label }: { value: string; label: string }) => (
//   <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
//     <div className="relative h-36 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700" />
//     <div className="pt-3">
//       <p className="text-3xl font-extrabold text-black">{value}</p>
//       <p className="text-[12px] text-gray-600">{label}</p>
//     </div>
//   </div>
// );

const CoralStat = () => (
  <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#ff8663] p-4 shadow-sm">
    <div className="flex-1 rounded-xl bg-[#ff9a7d]/30" />
    <div className="pt-3">
      <p className="text-3xl font-extrabold text-white">10+</p>
      <p className="text-[12px] text-white/90">Years of Combined Creative Experience</p>
    </div>
  </div>
);

const CoreValues = () => (
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <h3 className="mb-3 text-[15px] font-semibold text-gray-900">Core Values</h3>
    <ul className="space-y-2 text-[12px] text-gray-700">
      <li className="flex items-start gap-2"><span className="mt-0.5 inline-block h-4 w-4 rounded-full bg-emerald-400" />Strategic Creativity</li>
      <li className="flex items-start gap-2"><span className="mt-0.5 inline-block h-4 w-4 rounded-full bg-emerald-400" />End‑to‑End Craft</li>
      <li className="flex items-start gap-2"><span className="mt-0.5 inline-block h-4 w-4 rounded-full bg-emerald-400" />Collaborative Process</li>
    </ul>
    <div className="pt-4">
      <button className="inline-flex items-center gap-2 rounded-4xl bg-black px-3 py-2 text-[12px] font-medium text-white">
        More About Us
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black" style={{ transform: 'rotate(-45deg)' }}>
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  </div>
);

// const DarkLift = () => (
//   <div className="relative overflow-hidden rounded-2xl bg-black/90 p-5 text-white shadow-sm">
//     <div className="mb-16 h-52 w-full rounded-xl bg-gradient-to-br from-purple-800 to-fuchsia-700 opacity-60" />
//     <p className="text-4xl font-extrabold">120%</p>
//     <p className="text-[12px] text-white/80">Avg. Engagement Growth</p>
//     <p className="mt-3 text-[11px] leading-relaxed text-white/70">Clients typically see a significant lift in audience engagement — including higher conversions, longer session times, and improved brand perception.</p>
//     <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-45deg)' }}>
//         <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </span>
//   </div>
// );

const AvatarStat = () => (
  <div className="rounded-2xl bg-white p-4 shadow-sm">
    <div className="mb-3 h-16 w-full rounded-xl bg-gray-200" />
    <p className="text-3xl font-extrabold text-black">4.9★</p>
    <p className="text-[12px] text-gray-600">Client Satisfaction on Average</p>
  </div>
);

// const WideImageStat = () => (
//   <div className="relative overflow-hidden rounded-2xl bg-white p-0 shadow-sm">
//     <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 to-transparent" />
//     <div className="h-40 w-full rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900" />
//     <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
//       <p className="text-3xl font-extrabold text-white">150+</p>
//       <p className="text-[12px] text-white/90">Projects Delivered with Precision</p>
//     </div>
//   </div>
// );

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header row */}
        <div className="mb-8 grid grid-cols-12 items-start gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-gray-400" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500">About Us</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              We Build Brands with Meaning and Momentum
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[12px] leading-relaxed text-gray-600">
              A creative partner for bold ideas — blending strategy, design, code, and visual storytelling.
            </p>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Row 1 */}
          <div className="col-span-12 md:col-span-4">
            <div className="relative h-full overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: "url('/images/ab1.avif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />
              <div className="absolute bottom-0 left-0 z-10 w-full p-4 bg-black/60 rounded-b-xl">
                <p className="text-2xl font-bold text-white">80+</p>
                <p className="text-[12px] text-white/90">Brands Launched Across Industries</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4"><CoralStat /></div>
          <div className="col-span-12 md:col-span-4"><CoreValues /></div>

          {/* Row 2 */}
          <div className="col-span-12 md:col-span-8">
            <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: "url('/images/ab2.avif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 flex flex-col items-start justify-end h-full p-4">
                {/* You can add content here if needed, or leave empty for just the image */}
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: "url('/images/ab3.avif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 flex flex-col items-start justify-end h-full p-4">
                {/* You can add content here if needed, or leave empty for just the image */}
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="col-span-12 md:col-span-4"><AvatarStat /></div>
          <div className="col-span-12 md:col-span-8">
            <div className="relative h-full overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: "url('/images/ab4.avif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 flex flex-col items-start justify-end h-full p-4">
                {/* You can add content here if needed, or leave empty for just the image */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


