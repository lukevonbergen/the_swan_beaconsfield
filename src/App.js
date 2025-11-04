import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WelcomeOverlay from './components/WelcomeOverlay';
import ChristmasBanner from './components/ChristmasBanner';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import ChristmasMenu from './pages/ChristmasMenu';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Book from './pages/Book';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {isHomePage && <WelcomeOverlay />}
      <ChristmasBanner />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/christmas" element={<ChristmasMenu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;