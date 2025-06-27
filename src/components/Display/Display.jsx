import React from 'react'
import './Display.css'
import display1 from '../../assets/display-1.jpg'
import display2 from '../../assets/display-2.jpg'

const Display = () => {
  return (
    <div className="display-container">
      <div className="display-text">
        <h2>Explore Our Latest Collections</h2>
        <p>
          Discover the perfect blend of style and technology with our newest arrivals. 
          Choose your favorite and elevate your everyday experience.
        </p>
      </div>
      <div className="display-images">
        <img src={display1} alt="Collection 1" className="display-img" />
        <img src={display2} alt="Collection 2" className="display-img" />
      </div>
    </div>
  )
}

export default Display;