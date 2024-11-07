import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Load cart from localStorage if available, otherwise set to an empty array
  const [cart, setCart] = useState(() => {  
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => { 
    // setCart([...cart, product]); 
    // alert('Product added in cart')

    if (cart.some((item) => item.id === product.id)) {
        alert(`${product.title} is already in the cart!`);
       } else {
        setCart([...cart, product]);
         alert(`${product.title} has been added to the cart!`);
       }
}

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    alert('Product removed from cart');
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
