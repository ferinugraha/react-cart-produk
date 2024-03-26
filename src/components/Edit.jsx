import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Edit = ({ id }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        // Check if data is valid JSON
        if (response.ok && data) {
          setProduct(data);
        } else {
          console.error("Failed to fetch product data.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Data berhasil diubah");
      } else {
        alert(data.message || "Terjadi kesalahan saat mengubah data");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengirim permintaan");
    }
  };

  return (
    <div className="container">
      <div className="mt-3 mb-5">
        <Navbar />
      </div>

      <h5>Edit Produk</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama Produk:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Harga Produk:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Deskripsi Produk:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default Edit;
