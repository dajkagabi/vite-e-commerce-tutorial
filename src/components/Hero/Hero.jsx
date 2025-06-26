import React from 'react'
import './Hero.css';
import heroImg from '../../assets/hero2.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Welcome to Our Store</h1>
          <p>Discover the best products at unbeatable prices.</p>
          <button className="btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero;