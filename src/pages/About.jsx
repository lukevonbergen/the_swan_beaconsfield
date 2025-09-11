import React from 'react';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="pt-20">
      <PageHero 
        title="About The Old Swan"
        subtitle="Discover the heart and soul of Beaconsfield's most beloved pub. With over 175 years of tradition, we combine authentic British hospitality with modern comfort."
        imageSrc="https://images.unsplash.com/photo-1585151364670-de83fb61cd3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        imageAlt="Traditional pub interior with warm lighting and wooden beams"
        textAlign="right"
      />

      {/* Our Story */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal mb-6 text-brand-dark">
              Our Story
            </h2>
            <p className="text-lg text-brand-gray mb-6 leading-relaxed">
              Nestled in the heart of Beaconsfield, The Old Swan has been a cornerstone of the local community for over 175 years. Our traditional British pub combines the charm of yesteryear with modern comfort, offering an authentic experience that celebrates the finest of British pub culture.
            </p>
            <p className="text-lg text-brand-gray mb-6 leading-relaxed">
              We pride ourselves on serving locally sourced ingredients, traditional ales from regional breweries, and maintaining the warm, welcoming atmosphere that has made us a beloved gathering place for generations of locals and visitors alike.
            </p>
            <p className="text-lg text-brand-gray leading-relaxed">
              Whether you're joining us for a quiet pint after work, a hearty Sunday roast with the family, or celebrating a special occasion, The Old Swan offers an experience steeped in tradition and delivered with genuine hospitality.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="The Swan pub interior"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </SectionContainer>

      {/* History Timeline */}
      <SectionContainer background="gray">
        <h2 className="text-3xl md:text-4xl font-normal mb-12 text-brand-dark text-center">
          Our Heritage
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-32 flex-shrink-0">
                <span className="text-2xl font-normal text-brand-dark">1847</span>
              </div>
              <div>
                <h3 className="text-xl font-normal text-brand-dark mb-2">The Beginning</h3>
                <p className="text-brand-gray leading-relaxed">
                  The Old Swan first opened its doors as a coaching inn, serving travelers on the London to Oxford route. 
                  The original building featured stables and accommodation for weary journeyers.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-32 flex-shrink-0">
                <span className="text-2xl font-normal text-brand-dark">1920s</span>
              </div>
              <div>
                <h3 className="text-xl font-normal text-brand-dark mb-2">The Golden Age</h3>
                <p className="text-brand-gray leading-relaxed">
                  During the roaring twenties, The Old Swan became the social hub of Beaconsfield. 
                  Major renovations added the distinctive Tudor-style frontage that remains today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-32 flex-shrink-0">
                <span className="text-2xl font-normal text-brand-dark">1960s</span>
              </div>
              <div>
                <h3 className="text-xl font-normal text-brand-dark mb-2">Modernization</h3>
                <p className="text-brand-gray leading-relaxed">
                  The pub underwent significant modernization while carefully preserving its historic character. 
                  The main dining room and beer garden were added during this period.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-32 flex-shrink-0">
                <span className="text-2xl font-normal text-brand-dark">Today</span>
              </div>
              <div>
                <h3 className="text-xl font-normal text-brand-dark mb-2">Continuing Tradition</h3>
                <p className="text-brand-gray leading-relaxed">
                  Now in its fourth century of service, The Old Swan continues to evolve while honoring its rich heritage. 
                  We remain committed to serving the finest food, drink, and hospitality to our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What Makes Us Special */}
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-normal mb-12 text-brand-dark text-center">
          What Makes Us Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-normal text-brand-dark mb-4">Local Ales</h3>
            <p className="text-brand-gray leading-relaxed">
              We feature rotating selections from local breweries, ensuring fresh, quality ales that showcase the best of regional brewing.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-normal text-brand-dark mb-4">Community Hub</h3>
            <p className="text-brand-gray leading-relaxed">
              More than just a pub, we're a gathering place where neighbors become friends and memories are made over good food and drink.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-normal text-brand-dark mb-4">Local Sourcing</h3>
            <p className="text-brand-gray leading-relaxed">
              Our kitchen works with local farmers and suppliers to bring you the freshest ingredients and support our community.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer background="gray">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-brand-dark">
            Experience The Old Swan Tradition
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience where history meets hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/book" className="nav-link text-xl font-bold">
              Book a Table
            </Link>
            <span className="hidden sm:inline text-brand-gray">•</span>
            <Link to="/menu" className="nav-link text-xl font-bold">
              View Our Menu
            </Link>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default About;