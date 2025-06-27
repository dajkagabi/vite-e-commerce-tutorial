import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Display from './components/Display/Display';
import Swiper from './components/Swiper/Swiper';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';
//import Newsletter from './components/Newsletter/Newsletter';

import About from './components/About/About'; // <-- új import

const Home = () => (
  <>
    <Hero />
    <Display />
    <Swiper />
    <Article />
    {/* <Newsletter /> */}
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
