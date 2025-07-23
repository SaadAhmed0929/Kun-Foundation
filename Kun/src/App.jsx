import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Navbar from './Components/Navbar.jsx'; // Make sure this path is correct

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
