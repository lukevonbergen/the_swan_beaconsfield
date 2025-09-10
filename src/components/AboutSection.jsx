import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="flex flex-wrap min-h-[400px] bg-gray-50 font-serif">
      {/* Text */}
      <div className="flex-1 min-w-[400px] flex flex-col justify-center p-8 md:p-16 text-left">
        <h2 className="text-2xl md:text-3xl font-normal mb-6 text-brand-dark leading-tight">
          A Pub with Tradition
        </h2>
        <p className="text-sm md:text-md lg:text-lg text-brand-gray mb-6 leading-relaxed">
          Our pub has been serving the local community for generations, 
          offering a cosy atmosphere, hearty meals, and hand-pulled ales. 
          Whether you're here for a quiet pint or a lively evening with friends, 
          you'll always feel at home with us.
        </p>
        <p className="text-sm md:text-md lg:text-lg text-brand-gray mb-8 leading-relaxed">
          Join us for our famous Sunday roasts, live music nights, and 
          a warm welcome every day of the week.
        </p>
        <Link to="/book" className="nav-link text-xl font-bold w-fit">Book a Table</Link>
      </div>
      
      {/* Image */}
      <div className="flex-1 min-w-[400px] p-5">
        <img 
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Inside the pub" 
          className="w-full h-full min-h-[400px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;