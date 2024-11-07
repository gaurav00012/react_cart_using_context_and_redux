import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
const [wishlist, setWishlist] = useState([]);

const addToWishlist = (product) => { 

    if (wishlist.some((item) => item.id === product.id)) {
       alert(`${product.title} is already in the wishlist!`);
      } else {
        setWishlist([...wishlist, product]);
        alert(`${product.title} has been added to the wishlist!`);
      }
}
const removeFromWishlist = (id) => setWishlist(wishlist.filter(item => item.id !== id));

return (
 <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
   {children}
 </WishlistContext.Provider>
);
}
