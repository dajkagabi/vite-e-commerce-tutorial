import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../../data/products';
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <div>The product is not found.</div>
  }

  return (
    <div className="product-details">
      <div className="product-details-main">
        <img src={product.image} alt={product.name} className="product-details-img" />
        <div className="product-details-info">
          <h2>{product.name}</h2>
          <div className="product-details-price">{product.price} $</div>
          <p>{product.description}</p>
        </div>
      </div>
      <Link to="/shop" className="product-details-back">Back the shop</Link>
    </div>
  )
}

export default ProductDetails