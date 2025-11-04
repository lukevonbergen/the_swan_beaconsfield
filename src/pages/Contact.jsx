import React from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';

const Contact = () => {
  return (
    <main className="pt-32">
      <Helmet>
        <title>Contact The Old Swan Beaconsfield | 60 London End, HP9 2JD | Phone & Directions</title>
        <meta name="description" content="Contact The Old Swan traditional pub Beaconsfield. Located at 60 London End, HP9 2JD. Phone 01494 312962. Email beaconsfield@tosbars.co.uk. Find us near you!" />
        <meta name="keywords" content="contact Beaconsfield pub, The Old Swan address, 60 London End HP9, phone Beaconsfield pub, pub near me HP9, Beaconsfield pub location, contact traditional pub" />
        <meta property="og:title" content="Contact The Old Swan Beaconsfield - Location, Phone & Directions" />
        <meta property="og:description" content="Get in touch with The Old Swan Beaconsfield. Visit us at 60 London End, HP9 2JD or call 01494 312962 for bookings and enquiries." />
        <meta property="og:type" content="local_business" />
        <meta name="geo.region" content="GB-BKM" />
        <meta name="geo.placename" content="Beaconsfield" />
        <meta name="geo.position" content="51.608;-0.643" />
        <meta name="ICBM" content="51.608, -0.643" />
        <link rel="canonical" href="https://theoldswanbeaconsfield.co.uk/contact" />
      </Helmet>
      <PageHero
        title="Contact The Old Swan Beaconsfield"
        subtitle="Get in touch with us at 60 London End, HP9 2JD - we'd love to hear from you. Whether you have questions about our menu, want to book a table, or are planning a special event, our friendly Beaconsfield team is here to help."
        imageSrc="/images/oct_25/beergarden-sign.jpg"
        imageAlt="The Old Swan pub exterior in Beaconsfield"
        textAlign="left"
      />

      {/* SEO H1 */}
      <h1 className="sr-only">Contact The Old Swan Beaconsfield - Traditional Pub at 60 London End HP9 2JD - Phone 01494 312962</h1>
      
      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 text-brand-dark">
            Contact Our Beaconsfield Pub
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            We're currently setting up our contact system. In the meantime, you can reach us directly using the contact information below, or visit us in person at The Old Swan pub in the heart of Beaconsfield, HP9.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-normal text-brand-dark mb-4">Phone</h3>
              <a href="tel:01494312962" className="text-brand-gray hover:text-brand-dark transition-colors">
                01494 312962
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-normal text-brand-dark mb-4">Visit The Old Swan Beaconsfield</h3>
              <p className="text-brand-gray">
                60 London End<br/>
                Beaconsfield, HP9 2JD<br/>
                <small className="text-sm">Traditional British Pub in the heart of Beaconsfield</small>
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-normal text-brand-dark mb-4">Email</h3>
              <a href="mailto:beaconsfield@tosbars.co.uk" className="text-brand-gray hover:text-brand-dark transition-colors">
                beaconsfield@tosbars.co.uk
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Contact;