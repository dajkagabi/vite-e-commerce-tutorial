import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Display from './components/Display/Display';
import Swiper from './components/Swiper/Swiper';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';
// import Newsletter from './components/Newsletter/Newsletter';
import About from './components/About/About'; 
import ProductList from './components/Shop/ProductList';
import ProductDetails from './components/Shop/ProductDetails';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Blogs from './components/Blogs/Blogs';
import Features from './components/Features/Features';
import Favorites from './components/FavoritesContext/Favorites';

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
          <Route path="/shop" element={<ProductList />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/features" element={<Features/>} />
          <Route path="/favorites" element={<Favorites />} />
     
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
