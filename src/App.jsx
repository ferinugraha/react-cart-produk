import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Catalog from "./components/Catalog";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import Edit from "./components/Edit";
import { CartProvider } from "./CartContext";
import Add from "./components/Add";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
