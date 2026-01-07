import React from 'react';

const Services = () => {
  return (
    <section id="services" className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top label + heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-white shadow-sm px-5 py-1 mb-6">
            <span className="typography-eyebrow">
              Services
            </span>
          </div>

          <h2 className="typography-heading mb-4">
            What We Do (And Why It Works)
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            We build media systems, not one off campaigns. Our work blends audience insight, brand narrative, 
            creative execution, performance amplification, and measurement loops.
          </p>
        </div>

        {/* Main content grid: left column has 2 stacked cards, right column 1 large card + 2 small stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left column: portrait + gear */}
          <div className="space-y-6">
            {/* Audience & Cultural Insight card */}
            <article className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 md:min-h-[260px]">
                {/* Image on left */}
                <div className="relative md:w-[210px] md:h-full overflow-hidden rounded-2xl bg-gray-100 flex-shrink-0">
                  <img
                    src="/images/hero2.avif"
                    alt="Audience & Cultural Insight"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent" />
                </div>

                {/* Text content on right */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3 text-gray-700">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs">
                      👥
                    </span>
                    <span className="typography-eyebrow">
                      Insight
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    Audience & Cultural Insight
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Understanding people before platforms. Deep understanding of audience behavior, language, and context.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Behavior analysis', 'Cultural context', 'Clear direction'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[10px] md:text-xs font-medium text-gray-800"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* Brand & Content Strategy card */}
            <article className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-4 md:min-h-[200px]">
                {/* Text content on left */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3 text-gray-700">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs">
                      📝
                    </span>
                    <span className="typography-eyebrow">
                      Strategy
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    Brand & Content Strategy
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Narrative design aligned to business objectives. Define what to say, why it matters, and how it scales.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Narrative design', 'Scalable framework', 'Consistency'].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[10px] md:text-xs font-medium text-gray-800"
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
                    alt="Brand Strategy"
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
                      🎨
                    </span>
                    <span className="typography-eyebrow">
                      Creative
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    Creative Production
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
                    Content designed for how people actually consume media. Higher engagement, stronger recall, better performance.
                  </p>
                  
                  {/* tags centered */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Real behavior', 'Higher engagement', 'Better performance'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[10px] md:text-xs font-medium text-gray-800"
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
              {/* Paid & Performance Media card */}
              <div className="bg-white rounded-3xl shadow-sm p-6 text-center">
                <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-1 leading-tight break-words">
                  Paid & Performance
                </p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Amplification with intent, not guesswork
                </p>
              </div>

              {/* Analytics & Optimization card */}
              <div className="bg-white rounded-3xl shadow-sm p-6 text-center">
                <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-1 leading-tight break-words">
                  Analytics & Optimization
                </p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Learning loops that improve outcomes
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
