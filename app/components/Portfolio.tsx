import React from 'react';
import Image from 'next/image';

const portfolioItems = [
  // {
  //   id: 1,
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  //   title: 'SEO',
  //   description: 'Search engine optimization to improve your online visibility and rankings.\nUnlock the customers already searching for you. Dominate search and own your category.',
  //   tag: 'Digital Marketing',
  // },
  // {
  //   id: 2,
  //   image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
  //   title: 'GMB Management',
  //   description: 'Google My Business management to enhance your local presence.\nRise to the top of local search. Be who people call first, every time.',
  //   tag: 'Local SEO',
  // },
  // {
  //   id: 3,
  //   image: 'https://images.unsplash.com/photo-1643503640904-75c1a2093570?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   title: 'Social Media Marketing & PPC',
  //   description: 'Social media marketing and paid advertising across all platforms.\nFuel growth with scroll-stopping creative. Turn attention into loyal customers.',
  //   tag: 'Advertising',
  // },
  // {
  //   id: 4,
  //   image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
  //   title: 'Blog Marketing',
  //   description: 'Content marketing and blog strategies to engage your audience.\nEducate, inspire, and convert through every post. Become the authority in your space.',
  //   tag: 'Content Marketing',
  // },
  // {
  //   id: 5,
  //   image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  //   title: 'Development',
  //   description: 'All types of websites and software development services.\nLaunch fast, run smooth, scale without limits. We build digital that just works.',
  //   tag: 'Development',
  // },
  // {
  //   id: 6,
  //   image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
  //   title: 'Video Editing, Graphic Design & UI/UX',
  //   description: 'Creative services including video editing, graphic design, and UI/UX design.\nStand out in a crowded feed. Create an experience people remember.',
  //   tag: 'Creative Services',
  // },
  
  // --- Additional items based on the screenshot ---
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    title: 'Strategy',
    description:
      'Your socials, decoded into strategy that delivers.\nClarity where others deliver chaos. We map out a plan for lasting results.',
    tag: 'Social Media',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80',
    title: 'Content Creation',
    description:
      'Branded, culture-led content that actually converts.\nContent built to spark conversations. Make every scroll count for your brand.',
    tag: 'Creative',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1643503640904-75c1a2093570?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Social Media Management',
    description:
      'End-to-end management, without the overwhelm.\nStay visible, stay relevant, and never miss a beat. Let us handle it all while you focus on growth.',
    tag: 'Management',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80',
    title: 'Community Management',
    description:
      'Real conversations. Real connection. Real-time.\nTransform followers into true fans. Build a tribe around your mission.',
    tag: 'Engagement',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    title: 'Analytics & Reporting',
    description:
      'Strategy-first ad campaigns that stretch every penny.\nData you understand, growth you feel. Know what matters—act on what works.',
    tag: 'Analytics',
  },
];

const Portfolio = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-white shadow-sm px-5 py-1 mb-6">
            <span className="typography-eyebrow">
              Services
            </span>
          </div>

          <h2 className="typography-heading mb-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            Comprehensive digital marketing and development services to grow your business.
          </p>
        </div>

        {/* Grid of portfolio items */}
        <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Corner brackets overlay (to mimic camera framing) */}
                  <div className="pointer-events-none absolute inset-0 flex items-stretch justify-between p-4">
                    <div className="flex flex-col justify-between">
                      <span className="block h-6 w-6 border-l-2 border-t-2 border-white rounded-tl-2xl" />
                      <span className="block h-6 w-6 border-l-2 border-b-2 border-white rounded-bl-2xl" />
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <span className="block h-6 w-6 border-r-2 border-t-2 border-white rounded-tr-2xl" />
                      <span className="block h-6 w-6 border-r-2 border-b-2 border-white rounded-br-2xl" />
                    </div>
                  </div>

                  {/* Small circular icon in top-right */}
                  <div className="absolute top-4 right-4 h-7 w-7 rounded-full bg-black/70 flex items-center justify-center text-white text-xs">
                    ⓘ
                  </div>
                </div>

                {/* Text content */}
                <div className="px-6 py-5 md:px-7 md:py-6 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="typography-title">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 typography-badge">
                      {item.tag}
                    </span>
                  </div>
                  <p className="typography-small">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Second row - 2 items, center aligned */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-8">
            {portfolioItems.slice(3).map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Corner brackets overlay (to mimic camera framing) */}
                  <div className="pointer-events-none absolute inset-0 flex items-stretch justify-between p-4">
                    <div className="flex flex-col justify-between">
                      <span className="block h-6 w-6 border-l-2 border-t-2 border-white rounded-tl-2xl" />
                      <span className="block h-6 w-6 border-l-2 border-b-2 border-white rounded-bl-2xl" />
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <span className="block h-6 w-6 border-r-2 border-t-2 border-white rounded-tr-2xl" />
                      <span className="block h-6 w-6 border-r-2 border-b-2 border-white rounded-br-2xl" />
                    </div>
                  </div>

                  {/* Small circular icon in top-right */}
                  <div className="absolute top-4 right-4 h-7 w-7 rounded-full bg-black/70 flex items-center justify-center text-white text-xs">
                    ⓘ
                  </div>
                </div>

                {/* Text content */}
                <div className="px-6 py-5 md:px-7 md:py-6 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="typography-title">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 typography-badge">
                      {item.tag}
                    </span>
                  </div>
                  <p className="typography-small">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* See All button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-black text-white typography-button px-8 py-2.5 hover:bg-gray-900 transition-colors duration-200"
          >
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


