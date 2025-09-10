import React from 'react';

const MenuItem = ({ name, description, price, isVegetarian, isVegan, isGlutenFree }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 pb-6 border-b border-gray-200 last:border-b-0">
      <div className="flex-1 mb-2 md:mb-0 md:pr-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg md:text-xl font-normal text-brand-dark">
            {name}
          </h3>
          <div className="flex gap-1">
            {isVegetarian && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">V</span>
            )}
            {isVegan && (
              <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">VE</span>
            )}
            {isGlutenFree && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">GF</span>
            )}
          </div>
        </div>
        <p className="text-brand-gray text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      <div className="text-brand-dark font-normal text-lg md:text-xl">
        £{price}
      </div>
    </div>
  );
};

export default MenuItem;