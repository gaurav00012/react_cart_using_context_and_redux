import React, { useContext } from 'react';
import { WishlistContext } from '../contexts/WishlistContext';

function WishlistPage() {
const { wishlist, removeFromWishlist } = useContext(WishlistContext);

return (
 <div className="container mt-4">
   <h2>Your Wishlist</h2>
    {wishlist.length == 0 ? (
          <p>Your wishlist is empty</p>
    ) : 
   wishlist.map((item) => (
     <div key={item.id}>
       <h5>{item.title}</h5>
       <button onClick={() => removeFromWishlist(item.id)} className="btn btn-danger">Remove</button>
     </div>
   ))}
 </div>
);
}

export default WishlistPage;
