import React from "react";

const Cart = ({ cartItems, clearCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <button onClick={clearCart}>Clear Cart</button>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
