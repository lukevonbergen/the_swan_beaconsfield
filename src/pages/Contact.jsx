import React from 'react';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';

const Contact = () => {
  return (
    <main className="pt-20">
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch - we'd love to hear from you. Whether you have questions about our menu, want to book a table, or are planning a special event, our friendly team is here to help."
        imageSrc="/images/TheOldSwan_Pub.JPG"
        imageAlt="The Old Swan pub exterior in Beaconsfield"
        textAlign="right"
      />

      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 text-brand-dark">
            Coming Soon
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            We're currently setting up our contact system. In the meantime, you can reach us directly using the contact information in our footer, or visit us in person at The Old Swan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-normal text-brand-dark mb-4">Phone</h3>
              <a href="tel:01494312962" className="text-brand-gray hover:text-brand-dark transition-colors">
                01494 312962
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-normal text-brand-dark mb-4">Email</h3>
              <a href="mailto:info@theswanbeaconsfield.co.uk" className="text-brand-gray hover:text-brand-dark transition-colors">
                info@theswanbeaconsfield.co.uk
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-normal text-brand-dark mb-4">Visit Us</h3>
              <p className="text-brand-gray">
                60 London End<br/>
                Beaconsfield, HP9 2JD
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Contact;