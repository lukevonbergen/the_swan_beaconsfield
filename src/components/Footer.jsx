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
                  href="mailto:info@theoldswanbeaconsfield.co.uk" 
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300"
                >
                  info@theoldswanbeaconsfield.co.uk
                </a>
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/p/The-Old-Swan-Beaconsfield-61577926573912/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/theoldswanbeaconsfield/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-gray hover:text-brand-dark transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;