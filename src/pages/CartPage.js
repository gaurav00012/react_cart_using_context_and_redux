import {useSelector, useDispatch } from 'react-redux';
import {removeFromCart, clearCart } from '../slices/cartSlice';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  let cartTotal = 0;

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="list-group">
          {
          cartItems.map((item) => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.title}</h5>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="btn btn-danger btn-sm">Remove</button>
            </div>
          )
        )
          }
        </div>
      )}
      {cartItems.length > 0 && (
        <button onClick={()=>dispatch(clearCart())} className="btn btn-primary mt-3">Order Now</button>
      )}
    </div>
  );
}

export default CartPage;
