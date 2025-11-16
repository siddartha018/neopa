'use client';

import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'What types of photography do you offer?',
    answer: 'Portraits, events, products, and lifestyle shoots.',
  },
  {
    id: 2,
    question: 'How do I book a session?',
    answer: 'Just contact us with your preferred date and shoot type.',
  },
  {
    id: 3,
    question: 'Do you edit the photos?',
    answer: 'Yes, all final images are professionally edited.',
  },
  {
    id: 4,
    question: 'How long until I get my photos?',
    answer: 'Turnaround is usually 5-7 days.',
  },
  {
    id: 5,
    question: 'Can I request specific styles or poses?',
    answer: 'Absolutely—your vision guides the session.',
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side: Contact section */}
          <div className="space-y-6">
            {/* Faq tag */}
            <div className="inline-flex items-center justify-center rounded-full bg-white shadow-sm px-5 py-1">
              <span className="typography-eyebrow">
                Faq
              </span>
            </div>

            {/* Overlapping images */}
            <div className="relative w-full max-w-sm">
              <div className="relative aspect-[4/3]">
                {/* Front image - slightly rotated clockwise */}
                <div className="absolute inset-0 transform rotate-2 z-10">
                  <img
                    src="/images/hero1.avif"
                    alt="Photography"
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                    loading="lazy"
                  />
                </div>
                {/* Back image - slightly rotated counter-clockwise */}
                <div className="absolute inset-0 transform -rotate-2 translate-x-4 translate-y-4 z-0">
                  <img
                    src="/images/hero2.avif"
                    alt="Photography"
                    className="w-full h-full object-cover rounded-2xl shadow-md opacity-80"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="typography-heading">
              Have Questions
            </h2>

            {/* Subtext */}
            <p className="typography-body">
              Let us know how we can assist
            </p>

            {/* Contact Us button */}
            <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-8 py-4 typography-button hover:bg-gray-800 transition-colors duration-200">
              Contact Us
            </button>
          </div>

          {/* Right side: FAQ items */}
          <div className="space-y-4">
            {faqData.map((item) => {
              const isOpen = openItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="typography-title pr-4">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 text-gray-900 text-xl font-light">
                      {isOpen ? '×' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="typography-body">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

