import React from 'react'
import './Hero.css';
//import heroImg from '../../assets/hero2.jpg'; 

const Hero = () => {
  return (
   <div className='hero'>
    <div>
        <span>New Arrivals</span>
        <h1>The best apple watch</h1>
        <p>Discover the latest in Apple Watch technology with our new arrivals. Experience cutting-edge features, sleek designs, and unparalleled performance.</p>
        <button className='btn'>Shop Now</button>
         {/* <img className='hero-img' src={heroImg} alt="Hero"/>*/}   
    </div>
   </div>
  )
}

export default Hero;