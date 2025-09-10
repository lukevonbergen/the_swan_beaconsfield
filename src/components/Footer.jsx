import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 font-serif">
      <div className="flex flex-wrap py-12 px-10 md:px-16">
        {/* Opening Hours */}
        <div className="flex-1 min-w-[300px] pr-0 md:pr-12 mb-8 md:mb-0">
          <h3 className="text-lg mb-4 text-brand-dark font-normal">
            Opening Hours
          </h3>
          <ul className="space-y-1">
            <li className="flex justify-between py-1 border-b border-gray-100 text-sm">
              <span className="text-brand-dark">Monday to Thursday</span>
              <span className="text-brand-gray">12:00pm to 11:00pm</span>
            </li>
            <li className="flex justify-between py-1 border-b border-gray-100 text-sm">
              <span className="text-brand-dark">Friday to Saturday</span>
              <span className="text-brand-gray">12:00pm to 12:00am</span>
            </li>
            <li className="flex justify-between py-1 text-sm">
              <span className="text-brand-dark">Sunday</span>
              <span className="text-brand-gray">12:00pm to 10:30pm</span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1 min-w-[300px] grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-8">
          {/* Visit Us */}
          <div>
            <h3 className="text-lg mb-3 text-brand-dark font-normal">
              Visit Us
            </h3>
            <div className="text-brand-gray text-sm leading-relaxed">
              <p>The Swan<br />
              60 London End<br />
              Beaconsfield<br />
              HP9 2JD</p>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg mb-3 text-brand-dark font-normal">
              Get In Touch
            </h3>
            <div className="space-y-1 text-sm">
              <p>
                <a 
                  href="tel:01494673339" 
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300 relative inline-block"
                >
                  01494 673 339
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@theswanbeaconsfield.co.uk" 
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300 relative inline-block"
                >
                  info@theswanbeaconsfield.co.uk
                </a>
              </p>
              <p>
                <a 
                  href="https://instagram.com/swanbeaconsfield" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300 relative inline-block"
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