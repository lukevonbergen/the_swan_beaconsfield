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
      imageSrc: "/images/747330b2-c342-47b8-9839-f7db34cfcd89.JPG",
      isRecurring: true
    },
    {
      title: "Live Jazz Sessions",
      date: "First Friday of Every Month",
      time: "7:30 PM - 10:30 PM",
      description: "Enjoy smooth jazz performances from local musicians. Create the perfect atmosphere for a romantic evening or relaxed night out with friends.",
      imageSrc: "/images/01a1bcb1-9a0c-417a-aaed-75197c7464fb.JPG",
      isRecurring: true
    },
    {
      title: "Sunday Roast Special",
      date: "Every Sunday",
      time: "12:00 PM - 6:00 PM",
      description: "Traditional British Sunday roast with all the trimmings. Choose from beef, lamb, pork, or our vegetarian nut roast. Booking recommended.",
      imageSrc: "/images/af0e0fa9-f763-448f-ab33-7ef773394ba1.JPG",
      isRecurring: true
    },
    {
      title: "Wine Tasting Evening",
      date: "Saturday, March 23rd",
      time: "7:00 PM - 9:30 PM",
      description: "Discover new favorites at our quarterly wine tasting. Our sommelier will guide you through a selection of six wines paired with artisanal cheeses.",
      imageSrc: "/images/5a9eecfe-7dc0-4072-8ab4-b8c92db8240b.JPG"
    },
    {
      title: "Burns Night Celebration",
      date: "Friday, January 25th",
      time: "6:30 PM - 11:00 PM",
      description: "Join us for a traditional Burns Night supper with haggis, neeps and tatties, plus Scottish folk music and poetry readings.",
      imageSrc: "/images/dcb2b07c-1084-44c7-99b0-ebd4d8751f40.JPG"
    },
    {
      title: "Spring Beer Festival",
      date: "April 12-14th",
      time: "All Day",
      description: "Three days celebrating the best of British brewing. Over 20 guest ales from local and regional breweries, plus traditional pub games.",
      imageSrc: "/images/e86e3915-f023-4e63-bd8d-a0f9c6aac742.JPG"
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
      description: "Make your birthday memorable with a private celebration at The Old Swan. We offer flexible packages for all ages and group sizes."
    },
    {
      title: "Funeral Wakes",
      description: "Provide comfort to family and friends during difficult times. Our caring staff will ensure your gathering is handled with sensitivity and respect."
    }
  ];

  return (
    <main className="pt-20">
      <PageHero 
        title="Events at The Old Swan"
        subtitle="From weekly quiz nights to special celebrations, there's always something happening at The Old Swan. Join our community for memorable evenings of entertainment, great food, and good company."
        imageSrc="/images/5869f0ff-535d-4eae-8e37-33ca9c9e25fa.JPG"
        imageAlt="Events and gatherings at The Old Swan"
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
              The Old Swan is the perfect venue for your special occasions. Our experienced events team will work with you to create memorable celebrations that your guests will talk about for years to come.
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
              src="/images/40571662-feaf-4f84-b531-ee22c7b42298.JPG" 
              alt="Private dining space at The Old Swan"
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