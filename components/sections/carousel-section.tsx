'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Image paths are correct based on the file system check
const images = [
  '/Web Pics1/Home page/Home-Header-4.jpg',
  '/Web Pics1/Home page/Home Header-1.webp',
  '/Web Pics1/Home page/Home Header-2.jpg',
  '/Web Pics1/Home page/Home Header-3.jpg.png',
  '/Web Pics1/Home page/Home-Header-5.jpeg',
];

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('idle'); // 'idle', 'blackout', 'reveal'

  // Auto-advance timer with professional transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        startTransition((currentIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, transitioning]);

  // Handle transition phases
  const startTransition = (targetIndex: number) => {
    if (transitioning) return;
    
    setTransitioning(true);
    setNextIndex(targetIndex);
    
    // Phase 1: Black overlay appears
    setTransitionPhase('blackout');
    
    // Phase 2: After blackout, swap the images
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setTransitionPhase('reveal');
      
      // Phase 3: Black overlay disappears, showing new image
      setTimeout(() => {
        setTransitionPhase('idle');
        setTransitioning(false);
      }, 600);
    }, 300);
  };

  const goToPrevious = () => {
    if (transitioning) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    startTransition(prevIndex);
  };

  const goToNext = () => {
    if (transitioning) return;
    const nextIdx = (currentIndex + 1) % images.length;
    startTransition(nextIdx);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex || transitioning) return;
    startTransition(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Main image container */}
      <div className="relative w-full h-full">
        {/* Current image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        {/* Black overlay for transition effect */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out z-20 ${
            transitionPhase === 'blackout' 
              ? 'opacity-100' 
              : transitionPhase === 'reveal' 
                ? 'opacity-0' 
                : 'opacity-0 -z-10'
          }`}
        ></div>
        
        {/* Next image (hidden until transition) */}
        {transitionPhase !== 'idle' && (
          <div className={`absolute inset-0 w-full h-full ${transitionPhase === 'reveal' ? 'z-10' : '-z-10'}`}>
            <Image
              src={images[nextIndex]}
              alt={`Slide ${nextIndex + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        )}
      </div>
      
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-70 hover:opacity-100 z-30"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-70 hover:opacity-100 z-30"
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={transitioning}
          />
        ))}
      </div>
    </div>
  );
} 