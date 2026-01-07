import React from 'react';

const benefits = [
  {
    id: 1,
    icon: '👥',
    title: 'Start with people, not platforms',
    description: 'We study your audience: language, motivations, friction points, and cultural context before designing media.',
    tag: 'People First',
    cardBg: 'bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100',
    badgeBg: 'bg-pink-200',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Connect creativity to performance',
    description: 'Strategy, creative, and performance work together, not in silos. Media that performs and connects.',
    tag: 'Integrated Approach',
    cardBg: 'bg-gradient-to-br from-yellow-100 via-rose-100 to-orange-100',
    badgeBg: 'bg-yellow-200',
  },
  {
    id: 3,
    icon: '📈',
    title: 'Compound value over time',
    description: 'We build media systems that scale, not short term spikes. Long term growth through sustainable strategy.',
    tag: 'Long Term Growth',
    cardBg: 'bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100',
    badgeBg: 'bg-green-200',
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
            We don&apos;t run campaigns.
            <br />
            We build media systems.
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            Systems that start with people, connect creativity to performance, and compound value over time. 
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((item) => (
            <div
              key={item.id}
              className={`${item.cardBg} rounded-3xl px-8 py-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300`}
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
              <div className={`inline-flex items-center justify-center rounded-full ${item.badgeBg} px-5 py-2`}>
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

