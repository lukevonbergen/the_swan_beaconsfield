import React from 'react';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import MenuItem from '../components/MenuItem';
import { Link } from 'react-router-dom';

const Menu = () => {
  const starters = [
    {
      name: "Classic Prawn Cocktail",
      description: "Fresh Atlantic prawns served with crisp lettuce, Marie Rose sauce, and brown bread",
      price: "8.95",
      isGlutenFree: true
    },
    {
      name: "Duck Liver Pâté",
      description: "Smooth duck liver pâté with caramelised onion chutney, toasted sourdough, and mixed leaves",
      price: "7.50"
    },
    {
      name: "Soup of the Day",
      description: "Freshly prepared daily with crusty bread and butter",
      price: "6.25",
      isVegetarian: true
    },
    {
      name: "Crispy Whitebait",
      description: "Lightly dusted and fried, served with tartare sauce and lemon",
      price: "7.95"
    }
  ];

  const mains = [
    {
      name: "Beer Battered Fish & Chips",
      description: "Fresh cod in crispy beer batter with hand-cut chips, mushy peas, and tartare sauce",
      price: "16.95"
    },
    {
      name: "Slow-Cooked Beef & Ale Pie",
      description: "Tender beef braised in local ale with seasonal vegetables, topped with buttery pastry",
      price: "15.50"
    },
    {
      name: "Pan-Seared Salmon",
      description: "Atlantic salmon fillet with crushed new potatoes, green beans, and hollandaise sauce",
      price: "18.95",
      isGlutenFree: true
    },
    {
      name: "Traditional Sunday Roast",
      description: "Slow-roasted beef with Yorkshire pudding, roast potatoes, seasonal vegetables, and gravy",
      price: "17.95"
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Creamy arborio rice with mixed wild mushrooms, parmesan, and truffle oil",
      price: "14.95",
      isVegetarian: true,
      isGlutenFree: true
    },
    {
      name: "Lamb Shank",
      description: "Slow-braised lamb shank with rosemary and red wine jus, served with minted mash",
      price: "19.95",
      isGlutenFree: true
    }
  ];

  const desserts = [
    {
      name: "Sticky Toffee Pudding",
      description: "Classic British pudding with butterscotch sauce and vanilla ice cream",
      price: "7.50",
      isVegetarian: true
    },
    {
      name: "Eton Mess",
      description: "Fresh strawberries, crushed meringue, and whipped cream",
      price: "6.95",
      isVegetarian: true,
      isGlutenFree: true
    },
    {
      name: "Cheese Board",
      description: "Selection of British cheeses with crackers, grapes, and chutney",
      price: "9.95",
      isVegetarian: true
    },
    {
      name: "Chocolate Brownie",
      description: "Warm chocolate brownie with salted caramel ice cream",
      price: "7.25",
      isVegetarian: true
    }
  ];

  return (
    <main className="pt-20">
      <PageHero 
        title="Our Menu"
        subtitle="Discover our selection of traditional British pub classics, made with locally sourced ingredients and served with pride. From hearty mains to indulgent desserts, we have something for everyone."
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        imageAlt="Delicious pub food spread"
        textAlign="left"
      />

      {/* Menu Note */}
      <SectionContainer background="gray">
        <div className="text-center mb-8">
          <p className="text-lg text-brand-gray leading-relaxed max-w-3xl mx-auto">
            All our dishes are prepared fresh daily using locally sourced ingredients where possible. 
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

      {/* Starters */}
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Starters
        </h2>
        <div className="max-w-4xl mx-auto">
          {starters.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* Main Courses */}
      <SectionContainer background="gray">
        <h2 className="text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Main Courses
        </h2>
        <div className="max-w-4xl mx-auto">
          {mains.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* Desserts */}
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Desserts
        </h2>
        <div className="max-w-4xl mx-auto">
          {desserts.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer background="gray">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-brand-dark">
            Ready to Dine with Us?
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
            Book your table today and experience the finest in traditional British pub dining.
          </p>
          <Link to="/book" className="nav-link text-xl font-bold">
            Book a Table
          </Link>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Menu;