import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WelcomeOverlay from './components/WelcomeOverlay';
import PasswordGate from './components/PasswordGate';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Book from './pages/Book';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <PasswordGate>
      <div className="App">
        {isHomePage && <WelcomeOverlay />}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <Footer />
      </div>
    </PasswordGate>
  );
}

export default App;