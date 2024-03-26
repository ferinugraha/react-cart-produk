import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage("Product added to cart");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const removeFromCart = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      setMessage("Product removed from cart");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      alert("Product not found in cart");
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, message }}>
      {children}
    </CartContext.Provider>
  );
};
