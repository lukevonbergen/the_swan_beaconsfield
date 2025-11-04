import React from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import MenuItem from '../components/MenuItem';
import { Link } from 'react-router-dom';

const ChristmasMenu = () => {
  const christmasStarters = [
    {
      name: "Smoked Salmon & Prawn Terrine",
      description: "With dill cream cheese, capers and toasted sourdough",
      price: "9.50"
    },
    {
      name: "Roasted Butternut Squash Soup",
      description: "With sage croutons and crusty bread",
      price: "7.50",
      isVegetarian: true
    },
    {
      name: "Christmas Brie & Cranberry Parcels",
      description: "Wrapped in filo pastry with cranberry sauce",
      price: "8.50",
      isVegetarian: true
    },
    {
      name: "Duck & Orange Pâté",
      description: "With red onion marmalade and toasted brioche",
      price: "9.00"
    }
  ];

  const christmasMains = [
    {
      name: "Traditional Roast Turkey",
      description: "With sage and onion stuffing, pigs in blankets, roast potatoes, seasonal vegetables, cranberry sauce and rich gravy",
      price: "22.00"
    },
    {
      name: "Slow Roasted Beef Wellington",
      description: "With dauphinoise potatoes, honey roasted carrots and parsnips, and red wine jus",
      price: "28.00"
    },
    {
      name: "Honey Glazed Ham",
      description: "With roast potatoes, seasonal vegetables, parsley sauce and crackling",
      price: "20.00"
    },
    {
      name: "Roasted Nut & Mushroom Wellington",
      description: "With roast potatoes, seasonal vegetables and rich vegetarian gravy",
      price: "18.00",
      isVegetarian: true
    },
    {
      name: "Pan-Fried Sea Bass",
      description: "With crushed new potatoes, samphire and lemon butter sauce",
      price: "24.00"
    }
  ];

  const christmasDesserts = [
    {
      name: "Traditional Christmas Pudding",
      description: "With brandy sauce and vanilla ice cream",
      price: "7.50",
      isVegetarian: true
    },
    {
      name: "Chocolate & Orange Torte",
      description: "With Chantilly cream and candied orange",
      price: "7.00",
      isVegetarian: true
    },
    {
      name: "Sticky Toffee Pudding",
      description: "With toffee sauce and vanilla ice cream",
      price: "7.50",
      isVegetarian: true
    },
    {
      name: "Festive Cheeseboard",
      description: "Selection of British cheeses with crackers, grapes and chutney",
      price: "9.00",
      isVegetarian: true
    }
  ];

  return (
    <main className="pt-32">
      <Helmet>
        <title>Christmas Menu - The Old Swan Beaconsfield | Festive Dining HP9</title>
        <meta name="description" content="Celebrate Christmas at The Old Swan Beaconsfield. Traditional festive menu featuring roast turkey, seasonal dishes, and indulgent desserts. Book your Christmas table in HP9 today!" />
        <meta name="keywords" content="Christmas menu Beaconsfield, Christmas dinner HP9, festive dining Beaconsfield, Christmas Day booking, Christmas restaurant near me" />
        <meta property="og:title" content="Christmas Menu - The Old Swan Beaconsfield" />
        <meta property="og:description" content="Join us for a traditional Christmas celebration with our special festive menu featuring all your seasonal favorites." />
        <meta property="og:type" content="restaurant.menu" />
        <link rel="canonical" href="https://theoldswanbeaconsfield.co.uk/christmas-menu" />
      </Helmet>

      <PageHero
        title="Christmas Menu 2024"
        subtitle="Celebrate the festive season with us at The Old Swan. Enjoy traditional Christmas favorites and seasonal specials in the heart of Beaconsfield."
        imageSrc="/images/oct_25/food-burger.png"
        imageAlt="Festive dining at The Old Swan"
        textAlign="left"
      />

      {/* SEO H1 */}
      <h1 className="sr-only">Christmas Menu Beaconsfield - Festive Dining at The Old Swan HP9</h1>

      {/* Christmas Banner Info */}
      <SectionContainer background="gray">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-brand-dark">
            🎄 Christmas at The Old Swan 🎄
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed max-w-3xl mx-auto mb-6">
            Join us this Christmas for a truly memorable dining experience. Our special festive menu features
            traditional favorites alongside seasonal specialties, all prepared with the finest locally sourced ingredients.
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">V</span>
              Vegetarian
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">VE</span>
              Vegan
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">GF</span>
              Gluten Free
            </span>
          </div>
        </div>
      </SectionContainer>

      {/* Christmas Starters */}
      <SectionContainer>
        <h2 className="sticky top-32 bg-white z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Festive Starters
        </h2>
        <div className="max-w-4xl mx-auto">
          {christmasStarters.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* Christmas Mains */}
      <SectionContainer background="gray">
        <h2 className="sticky top-32 bg-gray-50 z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Christmas Main Courses
        </h2>
        <div className="max-w-4xl mx-auto">
          {christmasMains.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* Christmas Desserts */}
      <SectionContainer>
        <h2 className="sticky top-32 bg-white z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Festive Desserts
        </h2>
        <div className="max-w-4xl mx-auto">
          {christmasDesserts.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* Booking Information */}
      <SectionContainer background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
            Christmas Booking Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-normal text-brand-dark mb-4">Christmas Day</h3>
              <p className="text-brand-gray mb-2"><strong>Date:</strong> 25th December 2024</p>
              <p className="text-brand-gray mb-2"><strong>Sittings:</strong> 12:00pm & 3:00pm</p>
              <p className="text-brand-gray mb-4"><strong>Price:</strong> £65 per person (3 courses)</p>
              <p className="text-brand-gray text-sm">Children under 12: £35</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-normal text-brand-dark mb-4">Boxing Day</h3>
              <p className="text-brand-gray mb-2"><strong>Date:</strong> 26th December 2024</p>
              <p className="text-brand-gray mb-2"><strong>Sittings:</strong> 12:00pm onwards</p>
              <p className="text-brand-gray mb-4"><strong>Price:</strong> £45 per person (3 courses)</p>
              <p className="text-brand-gray text-sm">Children under 12: £25</p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-normal text-brand-dark mb-4 text-center">Festive Season Availability</h3>
            <p className="text-brand-gray mb-4 text-center">
              Our Christmas menu is available from <strong>1st December - 31st December 2024</strong>
            </p>
            <ul className="text-brand-gray space-y-2 max-w-2xl mx-auto">
              <li>• Booking required for all Christmas Day and Boxing Day reservations</li>
              <li>• Deposit of £20 per person required at time of booking</li>
              <li>• Please inform us of any dietary requirements when booking</li>
              <li>• Tables available for groups of all sizes</li>
              <li>• Private dining room available for parties of 20+</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-normal mb-4 text-brand-dark">
              Ready to Book Your Christmas Celebration?
            </h3>
            <p className="text-lg text-brand-gray mb-6">
              Don't miss out on the festive season at The Old Swan. Tables fill up quickly!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/book" className="nav-link text-xl font-bold">
                Book Your Christmas Table
              </Link>
              <span className="hidden sm:inline text-brand-gray">•</span>
              <Link to="/contact" className="nav-link text-xl font-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Additional Info */}
      <SectionContainer>
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-normal mb-4 text-brand-dark">
            Looking for Our Regular Menu?
          </h3>
          <p className="text-lg text-brand-gray mb-6">
            Our regular menu is still available throughout the festive season.
          </p>
          <Link to="/menu" className="nav-link text-xl font-bold">
            View Regular Menu
          </Link>
        </div>
      </SectionContainer>
    </main>
  );
};

export default ChristmasMenu;
