'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Image paths are correct based on the file system check
const images = [
  '/Web Pics1/Home page/Home-Header-4.jpg',
  '/Web Pics1/Home page/Home Header-1.webp',
  
  '/Web Pics1/Home page/Home-Header-5.jpeg',
];

const TRANSITION_DURATION = 700; // ms - Match this with CSS duration

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Auto-advance timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        goToNext();
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, transitioning]);

  // Function to handle setting the index and transition state
  const setActiveIndex = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex(index);

    // Allow transition to complete before enabling controls again
    setTimeout(() => {
      setTransitioning(false);
    }, TRANSITION_DURATION);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setActiveIndex(prevIndex);
  };

  const goToNext = () => {
    const nextIdx = (currentIndex + 1) % images.length;
    setActiveIndex(nextIdx);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex || transitioning) return;
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Image container */}
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <div
            key={src} // Use image src as key assuming they are unique
            className={`absolute inset-0 w-full h-full transition-opacity duration-${TRANSITION_DURATION} ease-in-out`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 10 : 0, // Ensure active image is on top
            }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0} // Prioritize loading the first image
            />
            {/* Optional subtle overlay on each image */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-70 hover:opacity-100 z-30 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
        disabled={transitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-70 hover:opacity-100 z-30 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
        disabled={transitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 px-4 py-2 rounded-full z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'} disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={transitioning}
          />
        ))}
      </div>
    </div>
  );
} 