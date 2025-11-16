import React from 'react';

const Services = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top label + heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-white shadow-sm px-5 py-1 mb-6">
            <span className="typography-eyebrow">
              Services
            </span>
          </div>

          <h2 className="typography-heading mb-4">
            How can I assist you today?
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            I transform your ideas into captivating images, focusing on
            creativity and expert use of light.
          </p>
        </div>

        {/* Main content grid: left column has 2 stacked cards, right column 1 large card + 2 small stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left column: portrait + gear */}
          <div className="space-y-6">
            {/* Portrait Photography card - image left, text right */}
            <article className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 md:h-[260px] lg:h-[260px]">
                {/* Image on left */}
                <div className="relative md:w-[210px] md:h-full overflow-hidden rounded-2xl bg-gray-100 flex-shrink-0">
                  <img
                    src="/images/hero2.avif"
                    alt="Portrait Photography"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* subtle fade at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent" />
                </div>

                {/* Text content on right */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3 text-gray-700">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs">
                      💬
                    </span>
                    <span className="typography-eyebrow">
                      Portrait
                    </span>
                  </div>
                  <h3 className="typography-title mb-2">
                    Portrait Photography
                  </h3>
                  <p className="typography-body mb-4">
                    For individuals, couples, and professionals.
                  </p>

                  {/* tags */}
                  <div className="flex flex-wrap gap-2">
                    {['Studio or outdoor', 'Natural editing', 'High-res files.'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 typography-badge"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* Shot with Top Gear card - text left, image right */}
            <article className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-4 md:h-[200px] lg:h-[190px]">
                {/* Text content on left */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3 text-gray-700">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs">
                      📷
                    </span>
                    <span className="typography-eyebrow">
                      Gear
                    </span>
                  </div>
                  <h3 className="typography-title mb-2">
                    Shot with Top Gear
                  </h3>
                  <p className="typography-body mb-4">
                    Using premium equipment for stunning images.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Lighting', 'Direction', 'Editing'].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 typography-badge"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image on right */}
                <div className="relative md:w-[210px] md:h-full overflow-hidden rounded-2xl bg-gray-100 flex-shrink-0">
                  <img
                    src="/images/cube.avif"
                    alt="Camera gear"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
                </div>
              </div>
            </article>
          </div>

          {/* Right column: large hero service card + 2 small stats cards below */}
          <div className="space-y-6">
            {/* Large Branding & Lifestyle Photography card - image background, text overlay in middle */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-sm h-[260px] md:h-[320px] lg:h-[340px]">
              <img
                src="/images/hero3.avif"
                alt="Branding & Lifestyle Photography"
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {/* Overlay service card in the middle */}
              <article className="absolute inset-6 md:inset-10 bg-white/95 backdrop-blur-sm rounded-3xl shadow-md p-5 md:p-6 flex flex-col items-center justify-center text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 mb-3 text-gray-700">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs">
                      💬
                    </span>
                    <span className="typography-eyebrow">
                      Branding
                    </span>
                  </div>
                  <h3 className="typography-title mb-2">
                    Branding & Lifestyle Photography
                  </h3>
                  <p className="typography-body max-w-sm">
                    Custom visuals that tell your story.
                  </p>
                  
                  {/* tags centered */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['On-location', 'Tailored brand styling', 'Fast delivery.'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 typography-badge"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </article>
            </div>

            {/* Two small stats cards below the large card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 150+ Client card */}
              <div className="bg-white rounded-3xl shadow-sm p-6 text-center">
                <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">
                  150+
                </p>
                <p className="typography-eyebrow">
                  Clients
                </p>
              </div>

              {/* 100+ Photoshoot card */}
              <div className="bg-white rounded-3xl shadow-sm p-6 text-center">
                <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">
                  100+
                </p>
                <p className="typography-eyebrow">
                  Photoshoots
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional stats row spanning full width below both columns */}
       
      </div>
    </section>
  );
};

export default Services;
