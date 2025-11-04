import React from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import MenuItem from '../components/MenuItem';
import { Link } from 'react-router-dom';

const Menu = () => {
  const starters = [
    {
      name: "Garlic and Herb King Prawns",
      description: "Served with freshly baked soda bread",
      price: "10.00"
    },
    {
      name: "Classic Tomato and Basil Bruschetta",
      description: "Fresh tomatoes and basil on toasted bread",
      price: "8.00",
      isVegetarian: true
    },
    {
      name: "Parmesan Crumbed Mushrooms",
      description: "With tartar sauce",
      price: "8.00",
      isVegetarian: true
    },
    {
      name: "Sausage Rolls",
      description: "With wholegrain mustard mayo",
      price: "7.50"
    },
    {
      name: "Baked Goats Cheese & Beetroot Salad",
      description: "With rocket, candied walnuts and balsamic glaze",
      price: "9.00/14.00",
      isVegetarian: true
    },
    {
      name: "Soup of the Day",
      description: "With rustic bread and butter",
      price: "7.00",
      isVegetarian: true
    }
  ];

  const mains = [
    {
      name: "Beer Battered Fish and Chips",
      description: "Peas and tartar sauce",
      price: "15.00"
    },
    {
      name: "King Prawn, Chilli & Herb Linguini",
      description: "With roasted garlic, cherry tomatoes and basil sauce",
      price: "16.00"
    },
    {
      name: "Beef or Chicken Burger",
      description: "Brioche bun with cheese, baby gem, tomato, gherkin and rustic fries. Add bacon +£1.50",
      price: "15.00"
    },
    {
      name: "10oz Sirloin Steak",
      description: "Vine roasted cherry tomatoes, sautéed mushrooms, onion rings, peppercorn sauce and garlic new potatoes",
      price: "25.00"
    },
    {
      name: "Halls of Hazelmere Sausages",
      description: "Colcannon mash, seasonal greens, and caramelised onion gravy",
      price: "15.00"
    },
    {
      name: "Panko Crumbed Chicken Schnitzel",
      description: "Mushroom sauce, rustic fries and house salad",
      price: "16.00"
    },
    {
      name: "Pie of the Week",
      description: "Ask server for details - with creamy mashed potatoes and seasonal greens",
      price: "16.00"
    }
  ];

  const sharingSnacks = [
    {
      name: "BBQ Glazed Sticky Chicken Wings",
      description: "With hot sauce",
      price: "12.00"
    },
    {
      name: "Baked Camembert",
      description: "With red onion chutney and rustic bread",
      price: "12.00",
      isVegetarian: true
    },
    {
      name: "Nachos",
      description: "Tortilla crisps, melted cheese, salsa, sour cream and guacamole",
      price: "10.00",
      isVegetarian: true
    },
    {
      name: "Selection of Rustic Bread & Olives",
      description: "Balsamic vinegar, olive oil and butter",
      price: "7.00",
      isVegetarian: true
    },
    {
      name: "Charcuterie",
      description: "Cured meats, olives, pickled onions & gherkins, cheese, chutney and rustic bread",
      price: "15.00"
    },
    {
      name: "Roasted Garlic & Rosemary Hummus",
      description: "With flat bread",
      price: "7.00",
      isVegetarian: true
    },
    {
      name: "Scampi and Tartar Sauce",
      description: "",
      price: "7.00"
    }
  ];

  const desserts = [
    {
      name: "Malva Pudding",
      description: "Traditional SA dessert",
      price: "6.00",
      isVegetarian: true
    },
    {
      name: "Chocolate Brownie",
      description: "",
      price: "6.50",
      isVegetarian: true
    },
    {
      name: "Ice Cream",
      description: "Chocolate, strawberry, vanilla",
      price: "5.00",
      isVegetarian: true
    },
    {
      name: "Cheesecake",
      description: "With berry compote",
      price: "7.50",
      isVegetarian: true
    },
    {
      name: "Sorbet",
      description: "Lemon, raspberry",
      price: "5.00",
      isVegetarian: true
    }
  ];

  const sides = [
    {
      name: "Rustic Fries",
      description: "",
      price: "4.50",
      isVegetarian: true
    },
    {
      name: "Mash",
      description: "",
      price: "4.50",
      isVegetarian: true
    },
    {
      name: "Colcannon Mash",
      description: "",
      price: "5.00",
      isVegetarian: true
    },
    {
      name: "Mixed Salad",
      description: "",
      price: "4.50",
      isVegetarian: true
    },
    {
      name: "Seasonal Greens",
      description: "",
      price: "5.00",
      isVegetarian: true
    }
  ];

  const kidsMenu = [
    {
      name: "Chicken Tenders",
      description: "All with rustic fries",
      price: "6.50"
    },
    {
      name: "Hot Dog",
      description: "All with rustic fries",
      price: "7.00"
    },
    {
      name: "Kids Burger",
      description: "All with rustic fries",
      price: "6.50"
    }
  ];

  return (
    <main className="pt-32">
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
        imageSrc="/images/oct_25/food-burger.png"
        imageAlt="Delicious food at The Old Swan"
        textAlign="left"
      />

      {/* SEO H1 */}
      <h1 className="sr-only">Traditional British Pub Food Menu Beaconsfield - Fresh Local Ingredients, Sunday Roasts & Classic Dishes at The Old Swan HP9</h1>
      
      {/* Menu Note */}
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

      {/* Starters */}
      <SectionContainer>
        <h2 className="sticky top-32 bg-white z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
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
        <h2 className="sticky top-32 bg-gray-50 z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Main Courses
        </h2>
        <div className="max-w-4xl mx-auto">
          {mains.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* Sharing & Snacks */}
      <SectionContainer>
        <h2 className="sticky top-32 bg-white z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Sharing & Snacks
        </h2>
        <div className="max-w-4xl mx-auto">
          {sharingSnacks.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* Desserts & Sides */}
      <SectionContainer background="gray">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="sticky top-32 bg-gray-50 z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
              Desserts
            </h2>
            <div>
              {desserts.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="sticky top-32 bg-gray-50 z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
              Sides
            </h2>
            <div>
              {sides.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Kids Menu */}
      <SectionContainer>
        <h2 className="sticky top-32 bg-white z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center">
          Under 12's <span className="text-lg">(All with rustic fries)</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {kidsMenu.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer background="gray">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-brand-dark">
            Ready to Dine at The Best Food in Beaconsfield?
          </h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
            Book your table today and experience the finest in traditional British pub dining and food in Beaconsfield HP9.
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