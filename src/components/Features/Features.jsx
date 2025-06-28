import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className="features-container">
      <h2>Our Features</h2>
      <ul className="features-list">
        <li>
          <span className="feature-title">Fast Delivery</span>
          <span className="feature-desc">Get your products delivered quickly and safely.</span>
        </li>
        <li>
          <span className="feature-title">Secure Payment</span>
          <span className="feature-desc">Multiple secure payment options for your convenience.</span>
        </li>
        <li>
          <span className="feature-title">Customer Support</span>
          <span className="feature-desc">24/7 support for all your questions and issues.</span>
        </li>
      </ul>
    </div>
  )
}

export default Features