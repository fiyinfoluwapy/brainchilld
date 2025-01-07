// src/context/CartContext.jsx
"use client"; // Add this line to mark this file as a client component

import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for the cart
const CartContext = createContext();

// CartContext provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if cart data is already in localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Initialize cart state with stored data
    }
  }, []); // Only run on component mount (initial load)

  useEffect(() => {
    // Only update localStorage if the cart has items
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]); // Runs whenever the cart changes

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item._id === product._id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, increase its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // If the product doesn't exist in the cart, add it
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  // Update quantity of a product
  const updateQuantity = (product, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === product._id ? { ...item, quantity } : item
      );
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
