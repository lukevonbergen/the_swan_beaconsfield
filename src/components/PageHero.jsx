import React from 'react';

const PageHero = ({ title, subtitle, imageSrc, imageAlt, textAlign = 'left' }) => {
  const textAlignClass = textAlign === 'right' ? 'text-right' : 'text-left';
  const alignItemsClass = textAlign === 'right' ? 'items-end' : 'items-start';

  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] font-serif">
      {/* Full width background image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>

      {/* Text overlay */}
      <div className={`relative z-10 flex flex-col justify-center ${alignItemsClass} h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-8 md:p-16 ${textAlignClass}`}>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-white leading-tight drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;