'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  image: string;
  alt?: string;
}

interface TyshiProps {
  items?: CarouselItem[];
  autoScrollInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

// Increased percentages so the total is 100. Now the cards fill the page width.
const CARD_WIDTHS_PERCENT = [32, 36, 32]; // left, center, right (adds up to 100)

const Tyshi: React.FC<TyshiProps> = ({
  items = [
    { id: 1, image: '/images/hero1.avif', alt: 'Hero image 1' },
    { id: 2, image: '/images/hero2.avif', alt: 'Hero image 2' },
    { id: 3, image: '/images/hero3.avif', alt: 'Hero image 3' },
    { id: 4, image: '/images/hero4.avif', alt: 'Hero image 4' },
  ],
  autoScrollInterval = 2000,
  showDots = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = items.length;

  // Infinite loop helpers
  const mod = (n: number, m: number) => ((n % m) + m) % m;

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(mod(index, total));
  }, [total]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => mod(prevIndex + 1, total));
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => mod(prevIndex - 1, total));
  }, [total]);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, autoScrollInterval, nextSlide]);

  const handleMouseEnter = () => { setIsPaused(true); };
  const handleMouseLeave = () => { setIsPaused(false); };

  // Get indices of visible slides: [left, center, right]
  const getVisibleIndices = () => [
    mod(currentIndex - 1, total),
    currentIndex,
    mod(currentIndex + 1, total),
  ];

  const visibleIndices = getVisibleIndices();

  // Remove maxWidth so the container fills the page width (break out of 1100px limit)
  const containerStyle = {
    minHeight: '320px',
    width: '100vw',
    maxWidth: '100vw',
    margin: '0 auto',
    position: 'relative' as const,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible'
  };

  // Reduce the gap a little to maximize real estate but keep a gap for visual separation
  const gapRem = 1.5;

  // Responsive height for cards
  const cardHeights = [260, 340, 260]; // left, center, right px - raise heights for more visual impact

  return (
    <div
      className="relative w-screen flex justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={containerStyle}
    >
      {/* Carousel container */}
      <div
        className="flex items-center justify-between transition-transform duration-500 ease-in-out w-full"
        style={{
          gap: `${gapRem}rem`,
        }}
      >
        {visibleIndices.map((itemIdx, idx) => {
          const item = items[itemIdx];
          // isCenter is now idx === 1
          const isCenter = idx === 1;
          // Set widths as % of available width, with px fallback for SSR
          const widthPercent = CARD_WIDTHS_PERCENT[idx];
          // Remove subtraction of the gap so no "loss" of width
          const cardWidth = `calc(${widthPercent}vw - ${gapRem * 2 / 3}rem)`;
          const cardHeight = cardHeights[idx];

          const scale = isCenter ? 1.13 : 0.97;
          const shadow = isCenter
            ? '0 6px 42px 0 rgba(24,24,27,.18)'
            : '0 1.5px 18px rgba(24,24,27,.12)';

          return (
            <div
              key={item.id}
              style={{
                width: cardWidth,
                minWidth: 0, // prevents flex overflow
                height: cardHeight,
                zIndex: isCenter ? 2 : 1,
                transform: `scale(${scale})`,
                transition: 'all 0.34s cubic-bezier(.32,.07,.32,1)',
                boxShadow: shadow,
                borderRadius: '1.3rem',
                background: 'white',
                overflow: 'hidden',
                position: 'relative',
                opacity: isCenter ? 1 : 0.77,
                border: isCenter ? '2.5px solid #d1d5db' : '1.2px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className={
                'pointer-events-auto ' +
                (isCenter ? ' ring-2 ring-gray-200 shadow-lg' : '')
              }
            >
              <Image
                src={item.image}
                alt={item.alt || `Carousel image ${item.id}`}
                fill
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  transition: 'filter 0.2s',
                  filter: isCenter ? 'none' : 'brightness(0.91)',
                }}
                priority={isCenter}
                sizes={
                  isCenter
                    ? "100vw"
                    : "100vw"
                }
              />
            </div>
          );
        })}
      </div>

      {/* Arrow buttons */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-sm flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md"
            style={{ fontSize: '1.15rem' }}
            aria-label="Previous slide"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-sm flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md"
            style={{ fontSize: '1.15rem' }}
            aria-label="Next slide"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Pagination dots */}
      {showDots && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-black w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tyshi;

