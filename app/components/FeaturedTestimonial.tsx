import React from 'react';

const FeaturedTestimonial = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Star rating pill */}
        <div className="inline-flex items-center justify-center rounded-full bg-white shadow-sm px-6 py-2 mb-8">
          <div className="flex gap-2 text-gray-900">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-900"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Main quote */}
        <p className="typography-quote mb-10">
          Every image tells a story, capturing moments with a seamless blend of art and emotion.
        </p>

        {/* Name & role */}
        <div className="space-y-1">
          <p className="typography-title">
            Mr. Liam Johnson
          </p>
          <p className="typography-body">
            CEO &amp; Founder, Mica
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonial;


