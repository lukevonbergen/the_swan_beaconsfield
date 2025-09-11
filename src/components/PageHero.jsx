import React from 'react';

const PageHero = ({ title, subtitle, imageSrc, imageAlt, textAlign = 'left' }) => {
  const textAlignClass = textAlign === 'right' ? 'text-right' : 'text-left';
  const justifyClass = textAlign === 'right' ? 'justify-end' : 'justify-start';

  return (
    <section className="flex flex-wrap max-h-[75vh] font-serif">
      {textAlign === 'left' ? (
        <>
          {/* Left side: Text */}
          <div className={`flex-1 min-w-[400px] flex flex-col justify-center p-8 md:p-16 ${textAlignClass}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-brand-dark leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className={`text-lg md:text-xl text-brand-gray leading-relaxed max-w-2xl ${textAlign === 'right' ? 'ml-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </div>
          {/* Right side: Image */}
          <div className="flex-1 min-w-[400px] p-5 max-h-[75vh]">
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full max-h-[65vh] object-cover rounded-lg"
            />
          </div>
        </>
      ) : (
        <>
          {/* Left side: Image */}
          <div className="flex-1 min-w-[400px] p-5 max-h-[75vh]">
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full max-h-[65vh] object-cover rounded-lg"
            />
          </div>
          {/* Right side: Text */}
          <div className={`flex-1 min-w-[400px] flex flex-col justify-center p-8 md:p-16 ${textAlignClass}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-brand-dark leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className={`text-lg md:text-xl text-brand-gray leading-relaxed max-w-2xl ${textAlign === 'right' ? 'ml-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default PageHero;