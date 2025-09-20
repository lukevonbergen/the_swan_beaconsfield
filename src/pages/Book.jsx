import React from 'react';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';

const Book = () => {
  return (
    <main className="pt-20">
      <PageHero 
        title="Book a Table"
        subtitle="Reserve your table for the perfect dining experience. From intimate dinners to family celebrations, we'll ensure your visit to The Old Swan is truly memorable."
        imageSrc="/images/c3168540-03b4-459c-9523-7b4c0a4814ba.JPG"
        imageAlt="Dining area at The Old Swan"
        textAlign="left"
      />

      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 text-brand-dark">
            Reserve Your Table
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Call us directly to book your table and we'll ensure you have the perfect dining experience.
          </p>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-normal text-brand-dark mb-4">
              Book by Phone
            </h3>
            <p className="text-lg text-brand-gray mb-6">
              Call us to reserve your table today
            </p>
            <a href="tel:01494312962" className="nav-link text-xl font-bold">
              01494 312962
            </a>
            <div className="mt-6 text-sm text-brand-gray">
              <p>Available during opening hours:</p>
              <p>Monday to Thursday: 12pm – 11pm</p>
              <p>Friday & Saturday: 12pm – Midnight</p>
              <p>Sunday: 12pm – 9pm</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer background="gray">
        <h2 className="text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Booking Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-normal text-brand-dark mb-4">
              What to Expect
            </h3>
            <ul className="space-y-3 text-brand-gray">
              <li>• Tables are held for 15 minutes past reservation time</li>
              <li>• Large groups (8+) may require a deposit</li>
              <li>• Sunday roasts: bookings recommended after 2 PM</li>
              <li>• Please inform us of any dietary requirements</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-normal text-brand-dark mb-4">
              Special Occasions
            </h3>
            <ul className="space-y-3 text-brand-gray">
              <li>• Let us know about birthdays or anniversaries</li>
              <li>• Private dining room available for 10-40 guests</li>
              <li>• Customizable menus for special events</li>
              <li>• Contact us for wedding and corporate bookings</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Book;