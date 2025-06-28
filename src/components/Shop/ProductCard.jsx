import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        className="product-card-img"
        src={product.image}
        alt={product.name}
      />
      <Link to={`/shop/${product.id}`} className="product-card-title-link">
        <h3 className="product-card-title">{product.name}</h3>
      </Link>
      <div className="product-card-rating">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="star"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="product-card-rating-value">5.0</span>
      </div>
      <div className="product-card-bottom">
        <span className="product-card-price">{product.price} $</span>
        <Link to={`/shop/${product.id}`} className="product-card-btn">
          Details
        </Link>
          <button className="add-cart-btn" onClick={() => addToCart(product)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      </div>
    
    </div>
  );
};

export default ProductCard;