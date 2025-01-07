"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Navigate hook for React Router

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      _id: "1",
      name: "Men's Jacket",
      price: 4500,
      secure_url: "https://via.placeholder.com/250x250?text=Jacket", // Static image URL
    },
    {
      _id: "2",
      name: "Mountain Bike",
      price: 25000,
      secure_url: "https://via.placeholder.com/250x250?text=Bike", // Static image URL
    },
    {
      _id: "3",
      name: "Custom Bike Wrap",
      price: 7500,
      secure_url: "https://via.placeholder.com/250x250?text=Bike+Wrap", // Static image URL
    },
    {
      _id: "4",
      name: "Cycling Gloves",
      price: 1200,
      secure_url: "https://via.placeholder.com/250x250?text=Gloves", // Static image URL
    },
  ]);
  const navigate = useNavigate(); // Navigate hook for page transitions

  return (
    <div className="featured-products-container my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <p className="text-center text-lg mb-10">Handpicked just for you</p>

      {/* Grid of Featured Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featuredProducts.length === 0 ? (
          <p className="text-center text-lg col-span-full">No featured products available.</p>
        ) : (
          featuredProducts.map((product) => (
            <div
              key={product._id}
              className="product-card bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="product-image">
                <img
                  src={product.secure_url}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="product-info p-4">
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-gray-700">₦{product.price}</p>
                <div className="mt-4 text-center">
                  <button
                    className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    onClick={() => navigate(`/product/${product._id}`)} // Navigate to product details page
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Call to action button */}
      <div className="text-center mt-8">
        <button
          className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate("/shop")}
        >
          Shop All Featured Products
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
