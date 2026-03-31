import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import MenuItem from '../components/MenuItem';
import { supabase } from '../lib/supabase';
import { useVenue } from '../lib/useVenue';

const venueId = process.env.REACT_APP_VENUE_ID;

const Menu = () => {
  const { venue } = useVenue();
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      const { data } = await supabase
        .from('menus')
        .select('*, menu_categories(*, menu_items(*))')
        .eq('venue_id', venueId)
        .order('position');
      setMenus(data || []);
      setLoading(false);
    };
    fetchMenus();
  }, []);

  // Flatten all categories across all menus, sorted by position
  const categories = menus
    .flatMap((m) => m.menu_categories || [])
    .sort((a, b) => a.position - b.position);

  // Split categories for the side-by-side layout (Desserts & Sides)
  const sideBySidePairs = [['Desserts', 'Sides']];

  const isSideBySide = (catName) =>
    sideBySidePairs.some((pair) => pair.includes(catName));

  // Group side-by-side categories
  const getSideBySidePartner = (catName) => {
    const pair = sideBySidePairs.find((p) => p.includes(catName));
    return pair ? pair.find((n) => n !== catName) : null;
  };

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

      {loading && (
        <SectionContainer>
          <p className="text-center text-brand-gray">Loading menu...</p>
        </SectionContainer>
      )}

      {/* Dynamic menu categories */}
      {categories.map((cat, idx) => {
        if (renderedSideBySide.has(cat.name)) return null;

        const items = (cat.menu_items || []).filter((i) => i.is_visible !== false).sort((a, b) => a.position - b.position);
        const bg = idx % 2 === 0 ? 'white' : 'gray';
        const bgClass = bg === 'gray' ? 'bg-gray-50' : 'bg-white';

        // Check if this category should be side-by-side
        if (isSideBySide(cat.name)) {
          const partnerName = getSideBySidePartner(cat.name);
          const partner = categories.find((c) => c.name === partnerName);
          if (partner) {
            renderedSideBySide.add(cat.name);
            renderedSideBySide.add(partner.name);
            const partnerItems = (partner.menu_items || []).filter((i) => i.is_visible !== false).sort((a, b) => a.position - b.position);

            return (
              <SectionContainer key={cat.id} background={bg}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className={`sticky top-32 ${bgClass} z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center`}>
                      {cat.name}
                    </h2>
                    <div>
                      {items.map((item) => (
                        <MenuItem
                          key={item.id}
                          name={item.name}
                          description={item.description || ''}
                          price={Number(item.price).toFixed(2)}
                          isVegetarian={item.is_vegetarian}
                          isVegan={item.is_vegan}
                          isGlutenFree={item.is_gluten_free}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className={`sticky top-32 ${bgClass} z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center`}>
                      {partner.name}
                    </h2>
                    <div>
                      {partnerItems.map((item) => (
                        <MenuItem
                          key={item.id}
                          name={item.name}
                          description={item.description || ''}
                          price={Number(item.price).toFixed(2)}
                          isVegetarian={item.is_vegetarian}
                          isVegan={item.is_vegan}
                          isGlutenFree={item.is_gluten_free}
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
          <SectionContainer key={cat.id} background={bg}>
            <h2 className={`sticky top-32 ${bgClass} z-10 py-4 text-3xl md:text-4xl font-normal mb-8 text-brand-dark text-center`}>
              {cat.name}
              {cat.name === "Under 12's" && <span className="text-lg"> (All with rustic fries)</span>}
            </h2>
            <div className="max-w-4xl mx-auto">
              {items.map((item) => (
                <MenuItem
                  key={item.id}
                  name={item.name}
                  description={item.description || ''}
                  price={Number(item.price).toFixed(2)}
                  isVegetarian={item.is_vegetarian}
                  isVegan={item.is_vegan}
                  isGlutenFree={item.is_gluten_free}
                />
              ))}
            </div>
          </SectionContainer>
        );
      })}

      {/* Booking Section */}
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
            />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-normal text-brand-dark mb-4">
              Book by Phone
            </h3>
            <p className="text-lg text-brand-gray mb-6">
              Call us to reserve your table today
            </p>
            <a href={`tel:${(venue?.phone || '01494 312962').replace(/\s/g, '')}`} className="nav-link text-xl font-bold">
              {venue?.phone || '01494 312962'}
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
