import React from 'react';

const SectionContainer = ({ 
  children, 
  background = 'white', 
  className = '',
  containerSize = 'default' 
}) => {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  const containerClass = containerSize === 'wide' 
    ? 'max-w-7xl' 
    : containerSize === 'narrow' 
      ? 'max-w-4xl' 
      : 'max-w-6xl';

  return (
    <section className={`w-full ${bgClass} font-serif ${className}`}>
      <div className={`${containerClass} mx-auto px-8 md:px-16 py-12 md:py-20`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;