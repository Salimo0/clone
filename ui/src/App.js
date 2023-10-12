import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Com/Nav/Navbar'
import SchoolGallery from './Pages/SchoolGallery/SchoolGallery';
import Contact from './Pages/Contact/Contact';
import Footer from './Com/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <div> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/SchoolGallery" element={<SchoolGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
