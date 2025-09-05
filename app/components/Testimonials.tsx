'use client';

import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const Testimonials = () => {
  const [isFirstRowHovered, setIsFirstRowHovered] = useState(false);
  const [isSecondRowHovered, setIsSecondRowHovered] = useState(false);

  type Testimonial = {
    id: number;
    quote: string;
    name: string;
    title: string;
    image: string;
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The team helped us go from idea to full launch in record time - and the results speak for themselves.",
      name: "Amir D.",
      title: "Operations Lead at Arteko",
      image: "/api/placeholder/40/40"
    },
    {
      id: 2,
      quote: "The branding work completely transformed how people see our business. It feels aligned, elevated, and true to who we are.",
      name: "Clara V.",
      title: "Co-founder at Liva",
      image: "/api/placeholder/40/40"
    },
    {
      id: 3,
      quote: "We've worked with other agencies before, but the attention to detail and design thinking here was on another level.",
      name: "Raymond T.",
      title: "Marketing Director at Krona",
      image: "/api/placeholder/40/40"
    },
    {
      id: 4,
      quote: "Our website now feels modern, fast, and effortless to use - it's made a huge difference in conversions.",
      name: "Jason M.",
      title: "Founder at Sonar",
      image: "/api/placeholder/40/40"
    },
    {
      id: 5,
      quote: "From strategy to launch, the process was smooth and collaborative. They challenged us, and delivered beyond expectations.",
      name: "Lena F.",
      title: "CEO at Northby",
      image: "/api/placeholder/40/40"
    },
    {
      id: 6,
      quote: "They didn't just give us a logo - they gave us an identity we're proud of. Every detail was intentional, and the results speak for themselves.",
      name: "M. Johnson",
      title: "Creative Director at Bloom Agency",
      image: "/api/placeholder/40/40"
    },
    {
      id: 7,
      quote: "Our new site looks amazing and works even better. The design is clean, intuitive, and exactly what we needed to scale.",
      name: "Leo H.",
      title: "Product Manager at Northbyte",
      image: "/api/placeholder/40/40"
    },
    {
      id: 8,
      quote: "The dev team was fast, flexible, and spot-on. They built a custom site that performs beautifully across all platforms.",
      name: "Maya K.",
      title: "Founder of Tenq Studio",
      image: "/api/placeholder/40/40"
    },
    {
      id: 9,
      quote: "The photography they delivered elevated our brand instantly - high quality, on-brand, and ready for every channel.",
      name: "Daniel S.",
      title: "Marketing Lead at Arteko Home",
      image: "/api/placeholder/40/40"
    },
    {
      id: 10,
      quote: "They nailed our visual identity and photography. Every image felt intentional and beautifully on-brand.",
      name: "Zoe N.",
      title: "Creative Lead at Velto",
      image: "/api/placeholder/40/40"
    }
  ];

  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5, 10);

  const StarRating = () => (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-black"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  // Card width is very small, and quote is styled to wrap in 2-3 lines
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 h-[220px] w-[180px] sm:w-[200px] flex-shrink-0 flex flex-col justify-between"
      style={{ minWidth: 0, maxWidth: '200px' }}
    >
      <div>
        <StarRating />
        <p
          className="text-gray-700 text-xs leading-snug font-medium break-words line-clamp-3"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '3.5em',
            maxHeight: '4.5em',
            wordBreak: 'break-word',
          }}
        >
          {testimonial.quote}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-600 text-xs font-medium">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xs text-gray-900">{testimonial.name}</p>
          <p className="text-[10px] text-gray-600">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );

  // Seamless marquee row that duplicates content and loops without gaps
  const MarqueeRow = ({
    items,
    direction,
    paused,
  }: {
    items: Testimonial[];
    direction: 'left' | 'right';
    paused: boolean;
  }) => {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const blockRef = useRef<HTMLDivElement | null>(null);

    // Animation frame loop
    useAnimationFrame((_, delta) => {
      if (paused) return;
      const blockWidth = blockRef.current?.offsetWidth || 0;
      if (blockWidth === 0) return;

      const pixelsPerSecond = 60; // speed
      const moveBy = (pixelsPerSecond * (delta / 1000)) * (direction === 'left' ? -1 : 1);
      let next = x.get() + moveBy;

      // Wrap position to create seamless loop without gaps
      if (direction === 'left') {
        if (next <= -blockWidth) {
          next += blockWidth;
        }
      } else {
        if (next >= 0) {
          next -= blockWidth;
        }
      }
      x.set(next);
    });

    return (
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div className="flex" style={{ x }}>
          <div ref={blockRef} className="flex gap-3">
            {items.map((testimonial, index) => (
              <TestimonialCard key={`a-${index}`} testimonial={testimonial} />
            ))}
          </div>
          {/* Duplicate for seamless loop; no outer gap to avoid seam */}
          <div className="flex gap-3" aria-hidden="true">
            {items.map((testimonial, index) => (
              <TestimonialCard key={`b-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Header */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-px bg-gray-400 mr-4"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Real results. Lasting partnerships. Here&quot;s what our collaborators have to say about working with us.
            </p>
          </div>
        </div>

        {/* Animated Testimonial Rows */}
        <div className="space-y-6">
          {/* First Row - Moves Left */}
          <div
            onMouseEnter={() => setIsFirstRowHovered(true)}
            onMouseLeave={() => setIsFirstRowHovered(false)}
          >
            <MarqueeRow items={firstRow} direction="left" paused={isFirstRowHovered} />
          </div>

          {/* Second Row - Moves Right */}
          <div
            onMouseEnter={() => setIsSecondRowHovered(true)}
            onMouseLeave={() => setIsSecondRowHovered(false)}
          >
            <MarqueeRow items={secondRow} direction="right" paused={isSecondRowHovered} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
