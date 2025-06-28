import React, { useState } from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.qty, 0);

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
          <Link to="/features">Features</Link>
        </li>
      </ul>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faHeart} className="icon" />
        
        <Link to="/profile">
          <FontAwesomeIcon
            icon={faUser}
            className="icon profile-icon"
          />
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className="icon hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <Link to="/cart" className="cart-icon-wrapper">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          {total > 0 && (
            <span className="cart-badge">{total}</span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;