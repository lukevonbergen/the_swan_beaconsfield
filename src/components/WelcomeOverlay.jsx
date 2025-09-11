import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WelcomeOverlay = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollAttempted, setScrollAttempted] = useState(false);

  useEffect(() => {
    let accumulatedScroll = 0;
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (overlayVisible) {
        e.preventDefault();
        
        if (e.deltaY > 0) { // Scrolling down
          accumulatedScroll += e.deltaY;
          const maxScroll = window.innerHeight * 0.8;
          const progress = Math.min(accumulatedScroll / maxScroll, 1);
          
          setScrollProgress(progress);
          
          // Hide overlay completely when fully scrolled
          if (progress >= 1) {
            setOverlayVisible(false);
            document.body.style.overflow = 'auto';
          }
        }
      }
    };

    const handleTouchStart = (e) => {
      if (overlayVisible) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (overlayVisible) {
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY; // Positive when scrolling up
        
        if (deltaY > 0) { // Swiping up (scrolling down)
          accumulatedScroll += deltaY * 2; // Multiply for sensitivity
          const maxScroll = window.innerHeight * 0.8;
          const progress = Math.min(accumulatedScroll / maxScroll, 1);
          
          setScrollProgress(progress);
          
          if (progress >= 1) {
            setOverlayVisible(false);
            document.body.style.overflow = 'auto';
            document.body.style.position = 'static';
            document.body.style.width = 'auto';
            document.body.style.top = 'auto';
          }
        }
        
        touchStartY = touchY; // Update for next move event
      }
    };

    const handleKeyDown = (e) => {
      if (overlayVisible && (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown')) {
        e.preventDefault();
        accumulatedScroll += 100; // Add scroll amount for keyboard
        const maxScroll = window.innerHeight * 0.8;
        const progress = Math.min(accumulatedScroll / maxScroll, 1);
        
        setScrollProgress(progress);
        
        if (progress >= 1) {
          setOverlayVisible(false);
          document.body.style.overflow = 'auto';
        }
      }
    };

    // Prevent all scrolling when overlay is visible
    const handleScroll = (e) => {
      if (overlayVisible) {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Prevent body scroll completely when overlay is visible
    if (overlayVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '0';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.top = 'auto';
    }
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.top = 'auto';
    };
  }, [overlayVisible]);

  if (!overlayVisible) {
    return null;
  }

  const translateY = scrollProgress * -100; // Move up as user scrolls

  return (
    <div 
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center font-serif transition-transform duration-100 ease-out"
      style={{ 
        transform: `translateY(${translateY}%)`,
        pointerEvents: scrollProgress >= 1 ? 'none' : 'auto'
      }}
    >
      <div className="text-center max-w-2xl px-8">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-brand-dark leading-tight mb-8"
          style={{ 
            opacity: 1 - (scrollProgress * 2), // Fade out faster than the overlay moves
            transform: `translateY(${scrollProgress * 50}px)` // Slight parallax effect
          }}
        >
          Welcome to<br />
          The Old Swan Beaconsfield
        </h1>

        {/* Contact Links */}
        <div 
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8"
          style={{ 
            opacity: 1 - (scrollProgress * 2),
            transform: `translateY(${scrollProgress * 40}px)`
          }}
        >
          <Link to="/book" className="nav-link text-xl font-bold">
            Book a Table
          </Link>
          <span className="hidden sm:inline text-brand-gray">•</span>
          <a href="tel:01494673339" className="nav-link text-xl font-bold">
            01494 673 339
          </a>
          <span className="hidden sm:inline text-brand-gray">•</span>
          <a href="mailto:info@theswanbeaconsfield.co.uk" className="nav-link text-xl font-bold">
            Email Us
          </a>
        </div>

        {/* Scroll instruction with arrow */}
        <div 
          className="text-center"
          style={{ 
            opacity: (1 - (scrollProgress * 2)) * 0.7,
            transform: `translateY(${scrollProgress * 30}px)`
          }}
        >
          <p className="text-lg md:text-xl text-brand-gray mb-4">
            Scroll to enter
          </p>
          {/* Down Arrow */}
          <div className="animate-bounce">
            <svg 
              className="w-8 h-8 mx-auto text-brand-gray" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOverlay;