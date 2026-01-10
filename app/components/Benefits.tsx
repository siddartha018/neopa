import React from 'react';
import Image from 'next/image';

const benefits = [
  {
    id: 1,
    icon: '👥',
    label: 'INSIGHT',
    title: 'Start with people, not platforms',
    description: 'We study your audience: language, motivations, friction points, and cultural context before designing media.',
    tags: ['Behavior analysis', 'Cultural context', 'Clear direction'],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
  },
  {
    id: 2,
    icon: '🎨',
    label: 'CREATIVE',
    title: 'Connect creativity to performance',
    description: 'Strategy, creative, and performance work together, not in silos. Media that performs and connects.',
    tags: ['Integrated Approach', 'Performance', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    id: 3,
    icon: '📈',
    label: 'GROWTH',
    title: 'Compound value over time',
    description: 'We build media systems that scale, not short term spikes. Long term growth through sustainable strategy.',
    tags: ['Long Term Growth', 'Sustainable', 'Scalable'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {benefits.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image at top */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Text content at bottom */}
              <div className="px-4 py-4 md:px-5 md:py-5">
                {/* Label with icon */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-gray-400 text-sm" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                    {item.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-gray-900 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 leading-snug line-clamp-2">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

