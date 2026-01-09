import React from 'react';

const benefits = [
  {
    id: 1,
    icon: '👥',
    title: 'Start with people, not platforms',
    description: 'We study your audience: language, motivations, friction points, and cultural context before designing media.',
    tag: 'People First',
    // Brighter gradient using 50 and 100 shades, and some neon touch
    cardBg: 'bg-gradient-to-br from-pink-50 via-blue-100 to-fuchsia-100',
    badgeBg: 'bg-pink-100/80',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Connect creativity to performance',
    description: 'Strategy, creative, and performance work together, not in silos. Media that performs and connects.',
    tag: 'Integrated Approach',
    cardBg: 'bg-gradient-to-br from-yellow-50 via-rose-100 to-orange-100',
    badgeBg: 'bg-yellow-100/80',
  },
  {
    id: 3,
    icon: '📈',
    title: 'Compound value over time',
    description: 'We build media systems that scale, not short term spikes. Long term growth through sustainable strategy.',
    tag: 'Long Term Growth',
    cardBg: 'bg-gradient-to-br from-green-50 via-lime-100 to-emerald-100',
    badgeBg: 'bg-green-100/80',
  },
];

const Benefits = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-sky-50 to-amber-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top label + heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-white/90 shadow-lg px-6 py-2 mb-6 border border-yellow-100">
            <span className="typography-eyebrow text-yellow-600 font-semibold tracking-wider">
              Benefits
            </span>
          </div>

          <h2 className="typography-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 drop-shadow">
            We don&apos;t run campaigns.
            <br />
            We build media systems.
          </h2>
          <p className="max-w-2xl mx-auto typography-body text-gray-700">
            Systems that start with people, connect creativity to performance, and compound value over time. 
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className={`${item.cardBg} rounded-3xl px-8 py-10 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/70`}
              style={{ backgroundBlendMode: 'lighten' }}
            >
              <div className="flex items-center justify-center mb-6 text-4xl drop-shadow-md">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <h3 className="typography-title mb-3 text-fuchsia-700 font-semibold">
                {item.title}
              </h3>
              <p className="typography-body mb-8 text-gray-800">
                {item.description}
              </p>
              <div className={`inline-flex items-center justify-center rounded-full ${item.badgeBg} px-5 py-2 border border-white font-bold text-pink-700 shadow`}>
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

