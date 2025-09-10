import React from 'react';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Quiz Night",
      date: "Every Tuesday",
      time: "8:00 PM",
      description: "Test your knowledge in our weekly quiz night! Teams of up to 6 people compete for pub vouchers and bragging rights. Topics range from general knowledge to local history.",
      imageSrc: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      isRecurring: true
    },
    {
      title: "Live Jazz Sessions",
      date: "First Friday of Every Month",
      time: "7:30 PM - 10:30 PM",
      description: "Enjoy smooth jazz performances from local musicians. Create the perfect atmosphere for a romantic evening or relaxed night out with friends.",
      imageSrc: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      isRecurring: true
    },
    {
      title: "Sunday Roast Special",
      date: "Every Sunday",
      time: "12:00 PM - 6:00 PM",
      description: "Traditional British Sunday roast with all the trimmings. Choose from beef, lamb, pork, or our vegetarian nut roast. Booking recommended.",
      imageSrc: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      isRecurring: true
    },
    {
      title: "Wine Tasting Evening",
      date: "Saturday, March 23rd",
      time: "7:00 PM - 9:30 PM",
      description: "Discover new favorites at our quarterly wine tasting. Our sommelier will guide you through a selection of six wines paired with artisanal cheeses.",
      imageSrc: "https://images.unsplash.com/photo-1513618364582-7b2862b3bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Burns Night Celebration",
      date: "Friday, January 25th",
      time: "6:30 PM - 11:00 PM",
      description: "Join us for a traditional Burns Night supper with haggis, neeps and tatties, plus Scottish folk music and poetry readings.",
      imageSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Spring Beer Festival",
      date: "April 12-14th",
      time: "All Day",
      description: "Three days celebrating the best of British brewing. Over 20 guest ales from local and regional breweries, plus traditional pub games.",
      imageSrc: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    }
  ];

  const privateEvents = [
    {
      title: "Wedding Receptions",
      description: "Celebrate your special day in our beautifully appointed function room. We can accommodate up to 80 guests for wedding breakfasts and evening receptions."
    },
    {
      title: "Corporate Events",
      description: "Professional meeting spaces with full catering services. Perfect for business lunches, team building events, and corporate celebrations."
    },
    {
      title: "Birthday Parties",
      description: "Make your birthday memorable with a private celebration at The Swan. We offer flexible packages for all ages and group sizes."
    },
    {
      title: "Funeral Wakes",
      description: "Provide comfort to family and friends during difficult times. Our caring staff will ensure your gathering is handled with sensitivity and respect."
    }
  ];

  return (
    <main className="pt-20">
      <PageHero 
        title="Events at The Swan"
        subtitle="From weekly quiz nights to special celebrations, there's always something happening at The Swan. Join our community for memorable evenings of entertainment, great food, and good company."
        imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        imageAlt="Live music performance at a pub"
        textAlign="left"
      />

      {/* Upcoming Events */}
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-normal mb-12 text-brand-dark text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </SectionContainer>

      {/* Private Events */}
      <SectionContainer background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal mb-6 text-brand-dark">
              Private Events
            </h2>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              The Swan is the perfect venue for your special occasions. Our experienced events team will work with you to create memorable celebrations that your guests will talk about for years to come.
            </p>
            <div className="space-y-6">
              {privateEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-brand-dark pl-6">
                  <h3 className="text-xl font-normal text-brand-dark mb-2">
                    {event.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f29d8ae8e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Private dining room setup"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl font-normal text-brand-dark mb-4">
            Planning a Private Event?
          </h3>
          <p className="text-lg text-brand-gray mb-6 max-w-2xl mx-auto">
            Get in touch with our events team to discuss your requirements. We'll help you create the perfect celebration.
          </p>
          <Link to="/contact" className="nav-link text-xl font-bold">
            Contact Events Team
          </Link>
        </div>
      </SectionContainer>

      {/* Newsletter Signup */}
      <SectionContainer>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-brand-dark">
            Stay Updated
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to be the first to know about upcoming events, special offers, and seasonal menu changes.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-dark font-serif"
              />
              <button className="nav-link text-xl font-bold">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-brand-gray mt-3">
              We respect your privacy and never share your information.
            </p>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Events;