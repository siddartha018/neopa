import React from 'react';

const portfolioItems = [
  {
    id: 1,
    image: '/images/wed1.avif',
    title: 'Crafted Details',
    description: 'Telling flavor stories through styled shots.',
    tag: 'Product Photography',
  },
  {
    id: 2,
    image: '/images/wed2.avif',
    title: 'Monochrome Mood',
    description: 'Black-and-white tones with bold emotion.',
    tag: 'Portrait Photography',
  },
  {
    id: 3,
    image: '/images/wed3.avif',
    title: 'Quiet Luxury',
    description: 'Moments that feel effortless yet refined.',
    tag: 'Event Photography',
  },
  {
    id: 4,
    image: '/images/wed4.avif',
    title: 'Urban Elegance',
    description: 'Clean lines and contrast in city structures.',
    tag: 'Portrait Photography',
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
              My Portfolio
            </span>
          </div>

          <h2 className="typography-heading mb-4">
            A glimpse through my
            <br className="hidden md:block" /> perspective
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            I transform your vision into reality with creative editorial
            and portrait photography.
          </p>
        </div>

        {/* Grid of portfolio items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
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


