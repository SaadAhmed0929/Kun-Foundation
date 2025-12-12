import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import WhoWeAre from './Pages/WhoWeAre.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Sections/Footer.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import DonationPage from "./Pages/Donation.jsx";

function App() {
  return (
    <>
      <ScrollToTop /> {/* Scrolls to top on route change */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
