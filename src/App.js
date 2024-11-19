import React, { useState, useEffect } from "react";
import Products from "./Products";
import Cart from "./Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <div>
      <h1>Product Store</h1>
      <p>Cart Count: {cartItems.length}</p>
      <Products addToCart={addToCart} />
      <Cart cartItems={cartItems} clearCart={clearCart} />
    </div>
  );
};

export default App;
