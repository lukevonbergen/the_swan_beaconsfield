import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import MenuItem from '../components/MenuItem';

const mainMenuData = [
  {
    name: 'While You Wait',
    items: [
      { name: 'Scampi', price: '5.00' },
      { name: 'Bread & Oil', price: '5.00', isVegetarian: true },
      { name: 'Olives', price: '4.00', isVegetarian: true },
      { name: 'Chicken Tenders', price: '6.00' },
      { name: 'Sausage Rolls', price: '7.50' },
    ],
  },
  {
    name: 'Lighter Bites',
    items: [
      { name: 'King Prawns', description: 'Mango chilli and pomegranate salsa with house salad and focaccia', price: '10.00 / 18.00 (main)' },
      { name: 'Buffalo Mozzarella', description: 'Fresh avocado, tomato with rocket and basil oil', price: '8.00', isVegetarian: true },
      { name: 'Duck Bon Bons', description: 'House salad and cranberry sauce', price: '9.00' },
      { name: 'Heritage Beetroot Carpaccio', description: 'Cucumber relish and toasted walnuts', price: '8.00', isVegetarian: true },
      { name: 'Bubble & Squeak', description: 'Hollandaise, smoked bacon, poached egg', price: '8.00 / 15.00 (main)' },
    ],
  },
  {
    name: 'Pub Favourites',
    items: [
      { name: 'All Day English Breakfast', price: '12.00' },
      { name: 'Beer Battered Fish and Chips', description: 'Peas and tartar sauce', price: '15.00' },
      { name: 'Beef, Chicken or Veg Burger', description: 'Brioche bun with cheese, baby gem, tomato, gherkin and rustic fries. Add bacon +£1.50', price: '15.00' },
      { name: 'Chicken Schnitzel', description: 'Mushroom sauce with house salad and fries', price: '16.00' },
      { name: 'Summer Salad', description: 'Baby gem lettuce, tomato, cucumber, avo, olives, red onion and peppers. Add chicken +£4.50 or prawns +£5', price: '12.00', isVegetarian: true },
      { name: 'Charred Cauliflower Steak', description: 'Parsnip puree, lightly spiced chickpeas with greens', price: '14.00', isVegetarian: true },
    ],
  },
  {
    name: "What's the Chef's Smoking",
    items: [
      { name: 'BBQ Glazed Smoked Baby Back Pork Ribs', description: 'House slaw and fries', price: '19.50' },
      { name: 'BBQ Glazed Sticky Chicken Wings', description: 'With hot sauce', price: '14.00' },
      { name: 'Smoked Meat Platter', description: 'Selection of tender BBQ glazed pork ribs, spicy chicken wings, boerewors, smoked pulled pork, brisket, fries, onion rings, coleslaw and our house dips', price: '39.00' },
      { name: 'Brisket Roll', price: '16.00' },
      { name: 'BBQ Smoked Pulled Pork Roll', price: '12.00' },
    ],
  },
  {
    name: 'Perfect With a Pint or Two',
    items: [
      { name: 'Baked Camembert', description: 'Red onion chutney and rustic bread', price: '12.00', isVegetarian: true },
      { name: 'Nachos', description: 'Tortilla chips, melted cheese, salsa, sour cream and guacamole. Add chilli +£4', price: '12.00', isVegetarian: true },
      { name: 'Cheesy Chips', description: 'Rustic fries topped with melted cheese', price: '9.00', isVegetarian: true },
      { name: 'Loaded Fries', description: 'Smoked pulled pork, Guinness cheese and BBQ sauce', price: '12.00' },
      { name: 'Charcuterie Board', price: '16.00' },
    ],
  },
  {
    name: 'Something Sweet',
    sideBySide: true,
    items: [
      { name: 'Malva Pudding', description: 'Traditional SA dessert', price: '6.50', isVegetarian: true },
      { name: 'Chocolate Brownie', price: '6.50', isVegetarian: true },
      { name: 'Ice Cream', description: 'Chocolate, strawberry, vanilla', price: '5.00', isVegetarian: true },
      { name: 'Eton Mess', price: '7.50', isVegetarian: true },
      { name: 'Sorbet', description: 'Lemon, raspberry', price: '5.00', isVegetarian: true },
    ],
  },
  {
    name: 'A Little Extra',
    sideBySide: true,
    items: [
      { name: 'Rustic Fries', price: '4.50', isVegetarian: true },
      { name: 'Onion Rings', price: '4.50', isVegetarian: true },
      { name: 'Cheesy Garlic Bread', price: '4.50', isVegetarian: true },
      { name: 'Tomato & Red Onion Salad', price: '4.50', isVegetarian: true },
      { name: 'Savoury Rice', price: '4.50', isVegetarian: true },
    ],
  },
];

const sundayMenuData = [
  {
    name: 'A Great Place to Start',
    items: [
      { name: 'King Prawns', description: 'Mango chilli and pomegranate salsa with house salad and focaccia', price: '10.00 / 18.00 (main)' },
      { name: 'Buffalo Mozzarella', description: 'Fresh avocado, tomato, rocket and basil oil', price: '8.00', isVegetarian: true },
      { name: 'Duck Bon Bons', description: 'House salad and cranberry sauce', price: '9.00' },
      { name: 'Beetroot Carpaccio', description: 'Cucumber relish and toasted walnuts with balsamic glaze', price: '8.00', isVegetarian: true },
      { name: 'Sausage Rolls', description: 'With gravy', price: '7.50' },
    ],
  },
  {
    name: 'All Our Favourites',
    subtitle: '(All roasts include crispy roasties, honey glazed parsnips and carrots, seasonal greens, red onion, Yorkshire pudding and gravy)',
    items: [
      { name: 'Roast Sirloin of Beef', price: '20.00' },
      { name: 'Smoked Beef Brisket', price: '23.00' },
      { name: 'Roast Chicken', price: '18.00' },
      { name: 'Roast Pork', price: '18.00' },
      { name: 'Vegetable Roast Wellington', description: 'Vegan friendly', price: '16.00', isVegan: true },
      { name: 'BBQ Smoked Baby Back Pork Ribs', description: 'Rustic fries, house salad and BBQ sauce', price: '19.50' },
      { name: 'Chicken and Bacon Creamy Carbonara', description: 'Topped with parmesan', price: '16.00' },
    ],
  },
  {
    name: 'Feeling Hungry',
    items: [
      { name: 'Duo Roast', description: 'Choice of 2 meats', price: '23.00' },
      { name: 'Trio Roast', description: 'Choice of 3 meats', price: '25.00' },
    ],
  },
  {
    name: 'Sharing',
    sideBySide: true,
    items: [
      { name: 'Baked Camembert', description: 'Red onion chutney and rustic bread', price: '12.00', isVegetarian: true },
      { name: 'Charcuterie Board', description: 'Selection of cold meats, cheese, pickles and rustic bread', price: '16.00' },
    ],
  },
  {
    name: 'A Little Extra',
    sideBySide: true,
    items: [
      { name: 'Cauliflower Cheese', price: '5.00', isVegetarian: true },
      { name: 'Stuffing', price: '5.00' },
      { name: 'Cream Spinach', price: '5.00', isVegetarian: true },
    ],
  },
  {
    name: 'Something Sweet',
    items: [
      { name: 'Malva Pudding', description: 'Traditional South African dessert (like sticky toffee only better) with custard', price: '7.00', isVegetarian: true },
      { name: 'Chocolate Brownie', description: 'Vanilla ice cream and chocolate sauce', price: '7.00', isVegetarian: true },
      { name: 'Eton Mess', description: 'Mixed berries, crushed meringue with whipped cream', price: '7.00', isVegetarian: true },
      { name: 'Ice Cream', description: 'Vanilla, strawberry, chocolate', price: '5.50', isVegetarian: true },
      { name: 'Sorbet', description: 'Raspberry or lemon', price: '5.50', isVegetarian: true },
    ],
  },
  {
    name: "Under 12's (Only)",
    items: [
      { name: 'Kids Roast', description: 'Roast beef, pork or chicken served with veggies, gravy and Yorkshire pudding', price: '10.00' },
    ],
  },
];

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const menuData = activeMenu === 'sunday' ? sundayMenuData : mainMenuData;

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
          <div className="inline-flex border border-brand-dark rounded overflow-hidden mb-8">
            <button
              onClick={() => setActiveMenu('main')}
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeMenu === 'main'
                  ? 'bg-brand-dark text-white'
                  : 'bg-transparent text-brand-dark hover:bg-gray-100'
              }`}
            >
              Main Menu
            </button>
            <button
              onClick={() => setActiveMenu('sunday')}
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeMenu === 'sunday'
                  ? 'bg-brand-dark text-white'
                  : 'bg-transparent text-brand-dark hover:bg-gray-100'
              }`}
            >
              Sunday Menu
            </button>
          </div>
          <p className="text-lg text-brand-gray leading-relaxed max-w-3xl mx-auto">
            All our delicious food dishes are prepared fresh daily at our Beaconsfield kitchen using locally sourced ingredients from HP9 suppliers where possible.
            Please inform our staff of any allergies or dietary requirements.
          </p>
          <p className="text-sm text-brand-gray italic mt-4 max-w-3xl mx-auto">
            Menus are subject to change based on availability. A discretionary 12.5% service charge will be added.
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

        if (cat.sideBySide && !renderedSideBySide.has(cat.name)) {
          const partner = sideBySideCategories.find((c) => c.name !== cat.name && !renderedSideBySide.has(c.name));
          if (partner) {
            renderedSideBySide.add(cat.name);
            renderedSideBySide.add(partner.name);

            return (
              <SectionContainer key={`${activeMenu}-${cat.name}`} background={bg}>
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
          <SectionContainer key={`${activeMenu}-${cat.name}`} background={bg}>
            <h2 className={`sticky top-20 ${bgClass} z-10 py-4 text-3xl md:text-4xl font-normal mb-4 text-brand-dark text-center`}>
              {cat.name}
            </h2>
            {cat.subtitle && (
              <p className="text-center text-brand-gray italic mb-8 max-w-2xl mx-auto">
                {cat.subtitle}
              </p>
            )}
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
