import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Best Quality That Boosted Our Brand',
      body: 'The photos were sharp, clean, and made our website look premium.',
      name: 'Henki',
      title: 'Artist',
      avatar: '/images/wed1.avif',
    },
    {
      quote: 'Captured the Essence of Our Business',
      body: 'Each image told a story and aligned perfectly with our vision.',
      name: 'Leopas',
      title: 'Artist',
      avatar: '/images/wed2.avif',
    },
    {
      quote: 'Exactly What Our Website Needed',
      body: 'Modern, high-quality visuals that made a strong first impression.',
      name: 'Wedly',
      title: 'CEO Founder',
      avatar: '/images/wed3.avif',
    },
  ];

  const StarIcon = ({ filled = true, className = '' }: { filled?: boolean; className?: string }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Testimonials Label */}
          <div className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-1.5 mb-6">
            <span className="typography-eyebrow">
              Testimonials
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="typography-heading mb-4">
            Hear from Our User
          </h2>

          {/* Subheading */}
          <p className="typography-body max-w-2xl mx-auto">
            Read how our users have achieved success
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8"
            >
              {/* Quote */}
              <h3 className="typography-title mb-3">
                &quot;{testimonial.quote}&quot;
              </h3>

              {/* Body Text */}
              <p className="typography-body mb-6">
                {testimonial.body}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name and Title */}
                <div className="flex-1">
                  <p className="typography-title">{testimonial.name}</p>
                  <p className="typography-small">{testimonial.title}</p>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 text-orange-500">
                  {[...Array(4)].map((_, i) => (
                    <StarIcon key={i} filled={true} className="text-orange-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <span className="typography-body text-gray-900 font-medium">
              Trusted by 20K+ Clients
            </span>
            <div className="flex gap-1 text-gray-900">
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} filled={true} className="text-gray-900" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
