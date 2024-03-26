import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function AddToCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const HandleEdit = (id) => {
    window.location.href = `/edit/${id}`;
  };

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete data");
        }
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        alert("Berhasil menghapus data");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="mt-3 mb-5">
        <Navbar />
      </div>
      <h5>List Produk</h5>
      <Link to="/add" className="btn btn-primary">
        Tambah Data
      </Link>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <div className="d-flex">
                    <button
                      className="btn btn-primary m-1"
                      onClick={() => {
                        HandleEdit(product.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Apakah Anda yakin ingin menghapus data ini?"
                          )
                        ) {
                          handleDelete(product.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddToCart;
