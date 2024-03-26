import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import Navbar from "./Navbar";
import { CartContext } from "../CartContext"; // Import CartContext

function Catalog() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Gunakan useContext untuk mengambil addToCart dari CartContext

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <Navbar />
      </div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mt-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "250px" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "15px",
                  }}
                >
                  {product.title}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  style={{ marginTop: "10px", width: "100%" }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
