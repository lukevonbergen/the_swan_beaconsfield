import React from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import MenuItem from '../components/MenuItem';

const menuData = [
  {
    name: 'While You Wait',
    items: [
      { name: 'Scampi', price: '5.00' },
      { name: 'Bread & Oil', price: '5.00', isVegetarian: true },
      { name: 'Olives', price: '4.00', isVegetarian: true },
    ],
  },
  {
    name: 'Starters',
    items: [
      { name: 'Garlic and Herb King Prawns', description: 'Served with freshly baked rustic bread', price: '10.00' },
      { name: 'Wild Mushroom Arancini', description: 'With truffle mayo and parmesan', price: '8.00', isVegetarian: true },
      { name: 'Bubble & Squeak', description: 'Hollandaise, smoked bacon, poached egg', price: '8.00/15.00' },
      { name: 'Sausage Rolls', description: 'With gravy', price: '7.50' },
      { name: 'Baked Goats Cheese & Beetroot Salad', description: 'With rocket, candied walnuts and balsamic glaze', price: '9.00/14.00', isVegetarian: true },
      { name: 'Soup of the Day', description: 'With rustic bread and butter', price: '7.00', isVegetarian: true },
    ],
  },
  {
    name: 'Main Courses',
    items: [
      { name: 'Beer Battered Fish and Chips', description: 'Peas and tartar sauce', price: '15.00' },
      { name: 'King Prawn, Chilli & Herb Linguini', description: 'With roasted garlic, cherry tomatoes and herb sauce', price: '16.00' },
      { name: 'Beef or Chicken Burger', description: 'Brioche bun with cheese, baby gem, tomato, gherkin and rustic fries. Add bacon +£1.50', price: '15.00' },
      { name: '10oz Sirloin Steak', description: 'Vine roasted cherry tomatoes, sautéed mushrooms, onion rings, peppercorn sauce and rustic fries', price: '25.00' },
      { name: 'Halls of Hazelmere Sausages', description: 'Mash, seasonal veg, and caramelised onion gravy', price: '15.00' },
      { name: 'Braised Lamb Shank', description: 'Rosemary mash, roasted veg and red wine jus', price: '22.00' },
      { name: 'Chicken, Leek & Mushroom Pie', description: 'With creamy mash potatoes and seasonal greens', price: '16.00' },
    ],
  },
  {
    name: 'Sharing & Snacks',
    items: [
      { name: 'BBQ Glazed Sticky Chicken Wings', description: 'With hot sauce', price: '12.00' },
      { name: 'Baked Camembert', description: 'With red onion chutney and rustic bread', price: '12.00', isVegetarian: true },
      { name: 'Nachos', description: 'Tortilla chips, melted cheese, salsa, sour cream and guacamole', price: '12.00', isVegetarian: true },
      { name: 'A Taste of the Sea', description: 'Selection of prawns, squid tentacles, mussels, crab & catch of the day with savoury rice, fries, house dips and lemon wedge', price: '25.00' },
      { name: 'All the Meats', description: 'Selection of tender BBQ glazed pork ribs, spicy chicken wings, pigs in blankets, chicken tenders, sausage rolls, fries, onion rings & our house dips', price: '22.00' },
    ],
  },
  {
    name: 'Desserts',
    sideBySide: true,
    items: [
      { name: 'Malva Pudding', description: 'Traditional SA dessert', price: '6.50', isVegetarian: true },
      { name: 'Chocolate Brownie', price: '6.50', isVegetarian: true },
      { name: 'Ice Cream', description: 'Chocolate, strawberry, vanilla', price: '5.00', isVegetarian: true },
      { name: 'Apple Crumble', description: 'With custard', price: '7.50', isVegetarian: true },
      { name: 'Sorbet', description: 'Lemon, raspberry', price: '5.00', isVegetarian: true },
    ],
  },
  {
    name: 'Sides',
    sideBySide: true,
    items: [
      { name: 'Rustic Fries', price: '4.50', isVegetarian: true },
      { name: 'Mash', price: '4.50', isVegetarian: true },
      { name: 'Roasted Carrots & Parsnips', price: '5.00', isVegetarian: true },
      { name: 'Mixed Salad', price: '4.50', isVegetarian: true },
      { name: 'Seasonal Greens', price: '5.00', isVegetarian: true },
    ],
  },
  {
    name: "Under 12's",
    subtitle: '(All with rustic fries)',
    items: [
      { name: 'Chicken Tenders', description: 'Southern fried', price: '7.00' },
      { name: 'Fish Goujons', price: '7.00' },
      { name: 'Kids Burger', price: '7.00' },
    ],
  },
];

const Menu = () => {
  const sideBySideCategories = menuData.filter((c) => c.sideBySide);
  const renderedSideBySide = new Set();

  return (
    <main className="pt-20">
      <Helmet>
        <title>Menu - Food Beaconsfield | Traditional British Pub Food & Sunday Roasts | The Old Swan HP9</title>
        <meta name="description" content="Delicious traditional British pub food at The Old Swan Beaconsfield. Fresh local ingredients, Sunday roasts, fish & chips, steaks. Best food in Beaconsfield HP9. Book your table!" />
        <meta name="keywords" content="food Beaconsfield, pub food Beaconsfield, Sunday roast Beaconsfield, fish and chips HP9, steak Beaconsfield, British food near me, restaurant Beaconsfield, dining HP9" />
        <meta property="og:title" content="Traditional British Pub Food Menu - The Old Swan Beaconsfield" />
        <meta property="og:description" content="Discover our seasonal menu featuring classic British pub favorites, fresh local ingredients, and exceptional Sunday roasts in the heart of Beaconsfield." />
        <meta property="og:type" content="restaurant.menu" />
        <link rel="canonical" href="https://theoldswanbeaconsfield.co.uk/menu" />
      </Helmet>
      <PageHero
        title="Our Menu - Food Beaconsfield"
        subtitle="Discover our selection of traditional British pub classics in Beaconsfield, made with locally sourced ingredients and served with pride. From hearty mains to indulgent desserts, we have exceptional food for everyone in HP9."
        imageSrc="/images/oct_25/food-flatbreads.jpg"
        imageAlt="Delicious food at The Old Swan"
        textAlign="left"
      />

      <h1 className="sr-only">Traditional British Pub Food Menu Beaconsfield - Fresh Local Ingredients, Sunday Roasts & Classic Dishes at The Old Swan HP9</h1>

      <SectionContainer background="gray">
        <div className="text-center mb-8">
          <p className="text-lg text-brand-gray leading-relaxed max-w-3xl mx-auto">
            All our delicious food dishes are prepared fresh daily at our Beaconsfield kitchen using locally sourced ingredients from HP9 suppliers where possible.
            Please inform our staff of any allergies or dietary requirements.
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

      {menuData.map((cat, idx) => {
        if (renderedSideBySide.has(cat.name)) return null;

        const bg = idx % 2 === 0 ? 'white' : 'gray';
        const bgClass = bg === 'gray' ? 'bg-gray-50' : 'bg-white';

        // Render Desserts & Sides side-by-side
        if (cat.sideBySide && !renderedSideBySide.has(cat.name)) {
          const partner = sideBySideCategories.find((c) => c.name !== cat.name && !renderedSideBySide.has(c.name));
          if (partner) {
            renderedSideBySide.add(cat.name);
            renderedSideBySide.add(partner.name);

            return (
              <SectionContainer key={cat.name} background={bg}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className={`sticky top-20 ${bgClass} z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center`}>
                      {cat.name}
                    </h2>
                    <div>
                      {cat.items.map((item) => (
                        <MenuItem
                          key={item.name}
                          name={item.name}
                          description={item.description || ''}
                          price={item.price}
                          isVegetarian={item.isVegetarian}
                          isVegan={item.isVegan}
                          isGlutenFree={item.isGlutenFree}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className={`sticky top-20 ${bgClass} z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center`}>
                      {partner.name}
                    </h2>
                    <div>
                      {partner.items.map((item) => (
                        <MenuItem
                          key={item.name}
                          name={item.name}
                          description={item.description || ''}
                          price={item.price}
                          isVegetarian={item.isVegetarian}
                          isVegan={item.isVegan}
                          isGlutenFree={item.isGlutenFree}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SectionContainer>
            );
          }
        }

        return (
          <SectionContainer key={cat.name} background={bg}>
            <h2 className={`sticky top-20 ${bgClass} z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center`}>
              {cat.name}
              {cat.subtitle && <span className="text-lg"> {cat.subtitle}</span>}
            </h2>
            <div className="max-w-4xl mx-auto">
              {cat.items.map((item) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  description={item.description || ''}
                  price={item.price}
                  isVegetarian={item.isVegetarian}
                  isVegan={item.isVegan}
                  isGlutenFree={item.isGlutenFree}
                />
              ))}
            </div>
          </SectionContainer>
        );
      })}

      <SectionContainer background="gray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-brand-dark">
            Book Your Table
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your table instantly using our online reservation system below, or give us a call.
          </p>

          <div className="w-full max-w-4xl mx-auto mb-12" style={{ minHeight: '736px' }}>
            <iframe
              src="https://tableagent.com/iframe/the-old-swan/"
              style={{ border: '0px none', minWidth: '375px', minHeight: '736px' }}
              sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              width="100%"
              height="100%"
              title="Book a table at The Old Swan"
              loading="lazy"
            />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg max-w-2xl mx-auto">
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
    </main>
  );
};

export default Menu;
