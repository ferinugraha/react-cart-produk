import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-3">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          {cart.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
      <Link to="/catalog" className="btn btn-primary mt-3">
        Back to Catalog
      </Link>
    </div>
  );
}

export default Cart;
