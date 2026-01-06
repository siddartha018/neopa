import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Start With People',
    description: 'We study your audience—language, motivations, friction points, and cultural context.',
  },
  {
    number: '02',
    title: 'Design the Narrative',
    description: 'We translate insight into a clear, consistent brand voice and content direction.',
  },
  {
    number: '03',
    title: 'Build the Media Engine',
    description: 'Platforms, formats, cadence, and creative—designed to compound over time.',
  },
  {
    number: '04',
    title: 'Amplify With Intent',
    description: 'Paid media is used to accelerate what already works, not mask weak strategy.',
  },
  {
    number: '05',
    title: 'Measure What Matters',
    description: 'We track engagement, leads, and growth signals—not vanity metrics.',
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-gray-50 shadow-sm px-5 py-1 mb-6">
            <span className="typography-eyebrow">
              Our Method
            </span>
          </div>

          <h2 className="typography-heading mb-4">
            How We Work
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            This approach ensures creativity never disconnects from performance. 
            We take full ownership of strategy, creative, and outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center gap-4">
                  <span className="text-6xl md:text-7xl font-bold text-gray-100 font-display">
                    {step.number}
                  </span>
                  <div className="h-px w-12 bg-gray-300 hidden md:block" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="typography-title mb-3">
                  {step.title}
                </h3>
                <p className="typography-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="typography-body mb-6 max-w-2xl mx-auto">
            Ready to build media that actually works?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-8 py-4 typography-button hover:bg-gray-800 transition-colors duration-200"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

