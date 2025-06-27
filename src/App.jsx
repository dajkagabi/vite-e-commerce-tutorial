import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Display from './components/Display/Display';
import Swiper from './components/Swiper/Swiper';
import Article from './components/Article/Article';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Display />
    <Swiper />
    <Article />
    <Newsletter />
    <Footer />
    </>
  )
}

export default App;