import React from 'react';

const EventCard = ({ title, date, time, description, imageSrc, isRecurring = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-normal text-brand-dark">
            {title}
          </h3>
          {isRecurring && (
            <span className="text-xs bg-brand-dark text-white px-2 py-1 rounded">
              RECURRING
            </span>
          )}
        </div>
        <div className="text-brand-gray text-sm mb-3">
          <p>{date} • {time}</p>
        </div>
        <p className="text-brand-gray text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;