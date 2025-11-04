import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="flex flex-wrap min-h-screen font-serif bg-gray-50">
      {/* Left side: Pub Image */}
      <div className="flex-1 min-w-[400px] p-8 md:p-12">
        <div className="h-full relative">
          <img
            src="/images/oct_25/landingpage.jpg"
            alt="The Old Swan Beaconsfield exterior"
            className="w-full h-full min-h-[500px] object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
        </div>
      </div>

      {/* Right side: Text + Buttons */}
      <div className="flex-1 min-w-[400px] flex flex-col justify-center p-8 md:p-16 text-right">
        <div className="max-w-2xl ml-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 text-brand-dark leading-tight">
            Welcome to<br />
            <span className="text-brand-gray">The Old Swan Beaconsfield</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-brand-gray leading-relaxed font-light">
            A traditional British pub serving the finest ales, hearty meals, and warm hospitality since 1847.
          </p>
          <p className="text-lg mb-12 text-brand-gray leading-relaxed opacity-80">
            Located in the heart of Beaconsfield, we're your perfect destination for good food and great company.
          </p>
          <div className="flex gap-8 flex-wrap justify-end">
            <Link to="/book" className="nav-link text-xl font-bold">
              Book a Table
            </Link>
            <Link to="/menu" className="nav-link text-xl font-bold">
              View our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;