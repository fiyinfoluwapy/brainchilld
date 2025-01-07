import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Correct import for useCart hook

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Your Cart</h2>
        <Link to="/" className="text-red-500 text-lg">Continue Shopping</Link>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              {/* Product Image */}
              <div className="flex items-center space-x-4">
                <img src={item.secure_url} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size} | Color: {item.color}</p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                  className="bg-gray-200 px-3 py-1 rounded-md"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                  className="bg-gray-200 px-3 py-1 rounded-md"
                >
                  +
                </button>
              </div>

              {/* Price */}
              <div className="text-lg font-semibold">₦{(item.price * item.quantity).toFixed(2)}</div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Subtotal */}
      {cart.length > 0 && (
        <div className="mt-8 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Subtotal</h3>
          <span className="text-2xl font-bold">₦{calculateSubtotal().toFixed(2)}</span>
        </div>
      )}

      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Link to="/checkout" className="bg-red-700 text-white py-3 px-6 rounded-lg w-full max-w-sm text-center hover:bg-red-600 transition">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;

