import React, { useState } from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Shoppio</span>
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/shop">Shop</Link>
         </li>
        <li>
        <Link to="/blogs">Blogs</Link>
        </li>
        <li>
        <Link to="/pages">Pages</Link>
        </li>
      </ul>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon
          icon={faBars}
          className="icon hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </nav>
  )
}

export default Navbar;