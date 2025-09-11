import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 font-serif">
      <div className="flex flex-wrap py-12 px-10 md:px-16">
        {/* Opening Hours */}
        <div className="w-full md:w-[400px] pr-0 md:pr-12 mb-8 md:mb-0">
          <h3 className="text-lg mb-4 text-brand-dark font-normal">
            Opening Hours
          </h3>
          <ul className="space-y-1">
            <li className="flex justify-between py-1 border-b border-gray-100 text-sm">
              <span className="text-brand-dark">Monday to Thursday</span>
              <span className="text-brand-gray">12pm – 11pm</span>
            </li>
            <li className="flex justify-between py-1 border-b border-gray-100 text-sm">
              <span className="text-brand-dark">Friday & Saturday</span>
              <span className="text-brand-gray">12pm – Midnight</span>
            </li>
            <li className="flex justify-between py-1 text-sm">
              <span className="text-brand-dark">Sunday</span>
              <span className="text-brand-gray">12pm – 9pm</span>
            </li>
          </ul>
        </div>

        {/* Contact Information - Right aligned with gap */}
        <div className="flex flex-col md:flex-row gap-6 ml-0 md:ml-auto">
          {/* Visit Us */}
          <div className="w-[200px]">
            <h3 className="text-lg mb-3 text-brand-dark font-normal">
              Visit Us
            </h3>
            <div className="text-brand-gray text-sm leading-relaxed">
              <p>The Old Swan<br />
              60 London End<br />
              Beaconsfield<br />
              HP9 2JD</p>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="w-[250px]">
            <h3 className="text-lg mb-3 text-brand-dark font-normal">
              Get In Touch
            </h3>
            <div className="space-y-1 text-sm">
              <p>
                <a 
                  href="tel:01494312962" 
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300"
                >
                  01494 312962
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@theswanbeaconsfield.co.uk" 
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300"
                >
                  info@theswanbeaconsfield.co.uk
                </a>
              </p>
              <p>
                <a 
                  href="https://instagram.com/swanbeaconsfield" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300"
                >
                  @swanbeaconsfield
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;