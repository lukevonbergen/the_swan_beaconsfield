import React from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import MenuItem from '../components/MenuItem';
import { Link } from 'react-router-dom';

const ChristmasMenu = () => {
  const christmasStarters = [
    {
      name: "Roasted Onion and Sage Soup",
      description: "With toasted chestnuts and rustic bread",
      price: "",
      isVegetarian: true
    },
    {
      name: "Spiced Crabcake",
      description: "With samphire and shellfish bisque",
      price: ""
    },
    {
      name: "Baked Cranberry and Brie Filo Parcel",
      description: "With fig chutney, rocket and balsamic reduction",
      price: "",
      isVegetarian: true
    },
    {
      name: "Pork Belly Bites",
      description: "With apple compote and crackling",
      price: ""
    }
  ];

  const christmasMains = [
    {
      name: "Roasted Stuffed Turkey",
      description: "With all the trimmings",
      price: ""
    },
    {
      name: "Slow Braised Lamb Shank",
      description: "Colcannon mash, honey glazed carrots & parsnips with redcurrant jus",
      price: ""
    },
    {
      name: "Pan Fried Plaice",
      description: "White wine caper, lemon & herb sauce, sautéed potatoes with steamed spinach",
      price: ""
    },
    {
      name: "Charred Cauliflower Steak",
      description: "Celeriac puree, spiced chickpeas with roasted butternut and chimichurri",
      price: "",
      isVegetarian: true
    }
  ];

  const christmasDesserts = [
    {
      name: "Traditional Christmas Pudding",
      description: "With brandy sauce",
      price: "",
      isVegetarian: true
    },
    {
      name: "Chocolate and Orange Brownie",
      description: "With salted caramel ice cream",
      price: "",
      isVegetarian: true
    },
    {
      name: "Winter Spiced Bread and Butter Pudding",
      description: "With nutmeg and brandy infused custard",
      price: "",
      isVegetarian: true
    },
    {
      name: "Vanilla Ice Cream",
      description: "With chocolate sauce",
      price: "",
      isVegetarian: true
    },
    {
      name: "Lemon Sorbet",
      description: "With raspberry purée",
      price: "",
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
        <link rel="canonical" href="https://theoldswanbeaconsfield.co.uk/christmas" />
      </Helmet>

      <PageHero
        title="The Old Swan Christmas Menu"
        subtitle="Celebrate the festive season with us at The Old Swan. Enjoy traditional Christmas favorites and seasonal specials in the heart of Beaconsfield."
        imageSrc="/images/PHOTO-2025-11-20-14-54-40.jpg"
        imageAlt="Festive dining at The Old Swan"
        textAlign="left"
      />

      {/* SEO H1 */}
      <h1 className="sr-only">Christmas Menu Beaconsfield - Festive Dining at The Old Swan HP9</h1>

      {/* Christmas Pricing Info */}
      <SectionContainer background="gray">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-brand-dark">
            🎄 Christmas at The Old Swan 🎄
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed max-w-3xl mx-auto mb-6">
            Join us this Christmas for a truly memorable dining experience. Our special festive menu features
            traditional favorites alongside seasonal specialties, all prepared with the finest locally sourced ingredients.
          </p>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 max-w-2xl mx-auto mb-6">
            <p className="text-2xl font-normal text-brand-dark mb-2">2 Course - £30</p>
            <p className="text-2xl font-normal text-brand-dark mb-4">3 Course - £34 per person</p>
            <p className="text-lg text-brand-gray mb-2">Complimentary mince pies, coffee and tea included</p>
            <p className="text-md text-brand-gray mb-2">Add on a glass of prosecco, £5 extra or champagne, £10 extra</p>
            <p className="text-sm text-brand-gray italic">12.5% Service charge will be added to your bill</p>
          </div>

          <div className="flex justify-center gap-6 mt-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">V</span>
              Vegetarian
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

      {/* Booking Section */}
      <SectionContainer background="gray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-brand-dark">
            Book Your Christmas Table
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't miss out on the festive season at The Old Swan. Book your table instantly using our online reservation system below, or give us a call.
          </p>

          <div className="w-full max-w-4xl mx-auto mb-12" style={{ minHeight: '736px' }}>
            <iframe
              src="https://tableagent.com/iframe/the-old-swan/"
              style={{ border: '0px none', minWidth: '375px', minHeight: '736px' }}
              sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              width="100%"
              height="100%"
              title="Book a table at The Old Swan"
            />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-normal text-brand-dark mb-4">
              Book by Phone
            </h3>
            <p className="text-lg text-brand-gray mb-6">
              Call us to reserve your Christmas table today
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

          <div className="border-t border-gray-300 pt-8 mt-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-normal mb-4 text-brand-dark">
              Looking for Our Regular Menu?
            </h3>
            <p className="text-md text-brand-gray mb-4">
              Our regular menu is still available throughout the festive season.
            </p>
            <Link to="/menu" className="nav-link text-lg font-bold">
              View Regular Menu
            </Link>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default ChristmasMenu;
