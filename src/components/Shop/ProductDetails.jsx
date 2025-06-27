import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../../data/products';
import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>A termék nem található.</div>
  }

  return (
    <div className="product-details">
      <div className="product-details-main">
        <img src={product.image} alt={product.name} className="product-details-img" />
        <div className="product-details-info">
          <h2>{product.name}</h2>
          <div className="product-details-price">{product.price} $</div>
          <p>{product.description}</p>
          <div className="product-details-actions">
            <button
              className="product-details-qty-btn"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              <FontAwesomeIcon icon={faMinus} size="lg" />
            </button>
            <span className="product-details-qty">{quantity}</span>
            <button
              className="product-details-qty-btn"
              onClick={() => setQuantity(q => q + 1)}
            >
              <FontAwesomeIcon icon={faPlus} size="" />
            </button>
            <button className="product-details-cart-btn">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </button>
          </div>
        </div>
      </div>
      <Link to="/shop" className="product-details-back">Back the shop</Link>
    </div>
  )
}

export default ProductDetails