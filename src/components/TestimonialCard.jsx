import React from 'react';

const TestimonialCard = ({ quote, author, location, rating = 5 }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>
      <blockquote className="text-brand-gray text-lg leading-relaxed mb-4">
        "{quote}"
      </blockquote>
      <div className="text-sm">
        <p className="font-normal text-brand-dark">{author}</p>
        {location && <p className="text-brand-gray">{location}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;