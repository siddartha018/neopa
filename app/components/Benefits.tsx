import React from 'react';

const benefits = [
  {
    id: 1,
    icon: '☀️',
    title: 'Tailored to Your Vision',
    description: 'Custom approach to every project your story, your style.',
    tag: 'Visionary Image Creation',
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Shot with Top Gear',
    description: 'Utilizing top-tier equipment for exceptional photos.',
    tag: 'High-Quality Imagery',
  },
  {
    id: 3,
    icon: '📌',
    title: 'Editing Included',
    description: 'Every image is meticulously edited to align with your unique vision.',
    tag: 'Professional editing',
  },
];

const Benefits = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top label + heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-white shadow-sm px-5 py-1 mb-6">
            <span className="typography-eyebrow">
              Benefits
            </span>
          </div>

          <h2 className="typography-heading mb-4">
            Why work with me?
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            Great photography is an experience rooted in collaboration, trust, and creativity.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl px-8 py-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6 text-2xl">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <h3 className="typography-title mb-3">
                {item.title}
              </h3>
              <p className="typography-body mb-8">
                {item.description}
              </p>
              <div className="inline-flex items-center justify-center rounded-full bg-gray-100 px-5 py-2">
                <span className="typography-badge">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;


