import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  let cartTotal = 0;
  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="list-group">
          {
          cart.map((item) => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.title}</h5>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">Remove</button>
            </div>
          )
        )
          }
        </div>
      )}
      {cart.length > 0 && (
        <button onClick={clearCart} className="btn btn-primary mt-3">Order Now</button>
      )}
    </div>
  );
}

export default CartPage;
