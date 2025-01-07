"use client"; // Add this line to mark the component as a client component

import React, { useState } from 'react'; // Add useState import here
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { useCart } from '../context/CartContext'; // Adjust the path based on the actual location

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart(); // Access the cart state from CartContext

  return (
    <nav className="bg-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-red-500 text-2xl font-semibold font-rubik">
          Sturdy BrainChild
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(prevState => !prevState)}
            className="text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/#home" className="text-red-500 hover:text-gray-300">Home</Link>
          <Link to="/#about" className="text-red-500 hover:text-gray-300">About</Link>
          <Link to="/#services" className="text-red-500 hover:text-gray-300">Services</Link>
          <Link to="/#contact" className="text-red-500 hover:text-gray-300">Contact</Link>
          
          {/* Cart Icon with Item Count */}
          <Link to="/cart" className="relative text-red-500 hover:text-gray-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l3 9H6l3-9zM3 3L6 9h12l3-6M6 9h12m-6 4v4m-2 0h4"
              />
            </svg>
            {/* Cart Item Count Badge */}
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-red-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/#home" className="text-red-500 text-xl py-4 hover:text-gray-300">Home</Link>
          <Link to="/#about" className="text-red-500 text-xl py-4 hover:text-gray-300">About</Link>
          <Link to="/#services" className="text-red-500 text-xl py-4 hover:text-gray-300">Services</Link>
          <Link to="/#contact" className="text-red-500 text-xl py-4 hover:text-gray-300">Contact</Link>

          {/* Cart Link for Mobile */}
          <Link to="/cart" className="relative text-red-500 text-xl py-4 hover:text-gray-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l3 9H6l3-9zM3 3L6 9h12l3-6M6 9h12m-6 4v4m-2 0h4"
              />
            </svg>
            {/* Cart Item Count Badge */}
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
