import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Shoppio</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Blogs</li>
        <li>Pages</li>
      </ul>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faBars} className="icon hamburger" />
      </div>
    </nav>
  )
}

export default Navbar;