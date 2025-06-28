import React from "react";
import { useCart } from "../Cart/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty } = useCart();

  if (cartItems.length === 0) return <div className="cart-empty">A kosár üres.</div>;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">The basket is empty</h2>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-row" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">{item.price?.toLocaleString()} $</div>
              <div className="cart-item-qty">
                <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                <span className="qty-value">{item.qty}</span>
                <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
            <div className="cart-item-total">
              {(item.price * item.qty)?.toLocaleString()} $
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <span>Summary:</span>
        <span className="cart-summary-total">{total.toLocaleString()}$</span>
      </div>
      <button className="order-btn">Order</button>
    </div>
  );
};

export default Cart;