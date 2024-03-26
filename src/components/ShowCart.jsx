import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const ShowCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowCart;
