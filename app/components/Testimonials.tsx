import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Social Monks helps us build the brand',
      body: 'They are really good at content creation and made a huge difference for us.',
      name: 'PathBreakers',
      avatar: '/nimages/path.png',
    },
    // Add more testimonials below as needed, but one should be "fiern" and featured.
    // {
    //   quote: 'Captured the Essence of Our Business',
    //   body: 'Each image told a story and aligned perfectly with our vision.',
    //   name: 'Leopas',
    //   title: 'Artist',
    //   avatar: '/nimages/im12.png',
    // },
    // {
    //   quote: 'Exactly What Our Website Needed',
    //   body: 'Modern, high quality visuals that made a strong first impression.',
    //   name: 'Wedly',
    //   title: 'CEO Founder',
    //   avatar: '/nimages/im13.png',
    // },
  ];

  const StarIcon = ({ filled = true, className = '' }: { filled?: boolean; className?: string }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  // Only one (the Fiern testimonial) is shown and made visually bigger.
  const fiernTestimonial = testimonials[0];

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

        {/* Featured Fiern Testimonial Card - made bigger */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 px-8 py-10 max-w-2xl w-full flex flex-col items-center text-center"
          >
            {/* Quote */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
              &quot;{fiernTestimonial.quote}&quot;
            </h3>
            {/* Body Text */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              {fiernTestimonial.body}
            </p>

            {/* User Info */}
            <div className="flex flex-col items-center gap-2 mb-4">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-2 border-4 border-gray-100 shadow">
                <img
                  src={fiernTestimonial.avatar}
                  alt={fiernTestimonial.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Name and Title */}
              <div>
                <p className="text-lg font-semibold text-gray-900">{fiernTestimonial.name}</p>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-2 justify-center text-orange-500 mb-2">
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} filled={true} className="text-2xl text-orange-500" />
              ))}
            </div>
          </div>
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
