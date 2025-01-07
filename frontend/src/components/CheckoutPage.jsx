import React from 'react';
import { useCart } from "../context/CartContext"; // Importing the useCart hook

function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-red-500 mb-4">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-medium mb-2">Order Summary</h2>
          <div className="space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item._id} className="flex justify-between items-center">
                  <div>
                    <p>{item.name}</p>
                    <p>{item.size} - {item.color}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                    >
                      +
                    </button>
                    <p className="ml-4">₦{(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
          <div className="flex justify-between items-center font-semibold mt-4">
            <p>Total</p>
            <p>₦{totalPrice.toFixed(2)}</p>
          </div>
        </div>

        {/* Payment & Shipping Info */}
        <div className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-medium mb-2">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="123 Main St"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Lagos"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Payment Method</label>
              <select className="w-full p-2 border rounded">
                <option>Credit Card</option>
                <option>Paystack</option>
                <option>Remita</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Complete Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
