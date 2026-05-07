import React, { useEffect, useRef } from 'react';

const WorldCupBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      } else {
        document.documentElement.style.setProperty('--banner-height', '0px');
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="fixed top-0 left-0 right-0 z-[60] w-full overflow-hidden"
      style={{ height: '38px' }}
    >
      {/* Stadium background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1920&q=80&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Dark overlay with green tint */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(10,40,28,0.92) 0%, rgba(20,60,40,0.88) 50%, rgba(10,40,28,0.92) 100%)',
        }}
      />

      {/* Subtle top light streak */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 10%, rgba(180,220,180,0.25) 50%, transparent 90%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 h-full flex items-center justify-center px-3 md:px-6"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
          textShadow: '0 1px 3px rgba(0,0,0,0.4)',
        }}
      >
        <span
          className="text-white text-xs md:text-sm lg:text-[15px] uppercase tracking-wider"
          style={{ fontWeight: 600, letterSpacing: '0.05em' }}
        >
          Showing all World Cup games
        </span>
      </div>

      {/* Bottom edge line */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 5%, rgba(100,180,120,0.3) 50%, transparent 95%)',
        }}
      />
    </div>
  );
};

export default WorldCupBanner;
