import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SectionContainer from '../components/SectionContainer';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      quote: "Absolutely fantastic food and service. The Sunday roast was perfection - tender beef, crispy potatoes, and the Yorkshire puddings were divine!",
      author: "Sarah Mitchell",
      location: "Local Resident",
      rating: 5
    },
    {
      quote: "The Old Swan has been our family's go-to pub for celebrations for over 20 years. Always consistently excellent food and the warmest welcome.",
      author: "James Thompson",
      location: "Beaconsfield",
      rating: 5
    },
    {
      quote: "Wonderful atmosphere for our anniversary dinner. The staff went above and beyond to make our evening special. Highly recommended!",
      author: "Emma & David Clarke",
      location: "High Wycombe",
      rating: 5
    }
  ];

  const features = [
    {
      icon: "🍺",
      title: "Traditional Ales",
      description: "Hand-pulled ales from local breweries, plus a carefully curated selection of wines and spirits."
    },
    {
      icon: "🍽️",
      title: "Fresh, Local Food",
      description: "Seasonal menus featuring the finest local ingredients, from classic pub fare to modern British cuisine."
    },
    {
      icon: "🎵",
      title: "Live Entertainment",
      description: "Live sports, live music sessions, and special events throughout the year."
    }
  ];

  return (
    <main className="pt-32">
      <Helmet>
        <title>The Old Swan Beaconsfield - Traditional Pub, Food & Live Music | HP9</title>
        <meta name="description" content="The Old Swan Beaconsfield - Award-winning traditional British pub with locally sourced food, hand-pulled ales, live music & events. Best pub Beaconsfield HP9. Book now!" />
        <meta name="keywords" content="pub Beaconsfield, traditional pub Beaconsfield, best pub Beaconsfield, food Beaconsfield, live music Beaconsfield, British pub HP9, pubs near me, The Old Swan" />
        <meta property="og:title" content="The Old Swan Beaconsfield - Traditional British Pub & Restaurant" />
        <meta property="og:description" content="Experience traditional British hospitality at The Old Swan Beaconsfield. Fresh local food, craft ales, live music events. 175+ years of tradition in HP9." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://theoldswanbeaconsfield.co.uk" />
        <meta name="geo.region" content="GB-BKM" />
        <meta name="geo.placename" content="Beaconsfield" />
        <meta name="geo.position" content="51.608;-0.643" />
        <meta name="ICBM" content="51.608, -0.643" />
        <link rel="canonical" href="https://theoldswanbeaconsfield.co.uk" />
      </Helmet>
      <HeroSection />
      <AboutSection />
      
      {/* SEO H1 - Hidden but present for search engines */}
      <h1 className="sr-only">The Old Swan Beaconsfield - Traditional British Pub with Live Music, Local Food & Best Ales in HP9</h1>
      
      {/* Features Section */}
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-normal mb-12 text-brand-dark text-center">
          What Makes Us Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-normal text-brand-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Menu Preview */}
      <SectionContainer background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal mb-6 text-brand-dark">
              Taste the Tradition
            </h2>
            <p className="text-lg text-brand-gray mb-6 leading-relaxed">
              Our kitchen serves up classic British pub favourites alongside modern dishes, all made with locally sourced ingredients from Beaconsfield and surrounding areas. From our famous Sunday roasts to fresh fish and chips, every meal is prepared with care and served with pride at the best pub in Beaconsfield.
            </p>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              Whether you're craving a hearty pie, fresh seafood, or something vegetarian, our seasonal menu has something for everyone in HP9 and beyond.
            </p>
            <Link to="/menu" className="nav-link text-xl font-bold">
              Explore Our Menu
            </Link>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Delicious pub food spread"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-normal mb-12 text-brand-dark text-center">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </SectionContainer>

      {/* Call to Action */}
      <SectionContainer background="gray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-brand-dark">
            Ready for Your Visit?
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us at The Old Swan for an unforgettable dining experience. Whether it's a quick drink, family meal, or special celebration, we're here to make your visit memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/book" className="nav-link text-xl font-bold">
              Book Your Table
            </Link>
            <span className="hidden sm:inline text-brand-gray">•</span>
            <Link to="/events" className="nav-link text-xl font-bold">
              View Events
            </Link>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Home;