import React, { useEffect, useState } from "react"; // Importing React and hooks
import { useParams } from "react-router-dom"; // Importing useParams from react-router-dom
import axios from "axios"; // Importing axios for API calls
import { useCart } from "../context/CartContext"; // Importing useCart hook
import { ToastContainer, toast } from "react-toastify"; // Importing ToastContainer and toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Importing the CSS for react-toastify

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const [product, setProduct] = useState(null); // State to store product details
  const [relatedProducts, setRelatedProducts] = useState([]); // State to store related products
  const [selectedSize, setSelectedSize] = useState(""); // State to track selected size
  const [selectedColor, setSelectedColor] = useState(""); // State to track selected color
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to store any errors

  const { addToCart } = useCart(); // Hook to add items to the cart

  // Fetch product details and related products when component mounts
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Fetch the product details
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        const fetchedProduct = response.data.product;
  
        // Log to check the fetched data
        console.log("Fetched Product:", fetchedProduct);
  
        // Extract and format size and color options
        const productSize = Array.isArray(fetchedProduct.size)
          ? fetchedProduct.size[0].split(",")
          : fetchedProduct.size.split(",");
          
        const productColor = Array.isArray(fetchedProduct.color)
          ? fetchedProduct.color[0].split(",")
          : fetchedProduct.color.split(",");
  
        // Set product details in state
        setProduct({
          ...fetchedProduct,
          size: productSize,
          color: productColor,
        });
  
        // Extract tags from the fetched product
        const productTags = fetchedProduct.tags || [];
  
        // Fetch related products based on shared tags
        if (productTags.length > 0) {
          const relatedResponse = await axios.get(`http://localhost:5000/api/products/related`, {
            params: { tags: productTags }, // Pass tags as query params
          });
  
          setRelatedProducts(relatedResponse.data.relatedProducts || []);
        } else {
          setRelatedProducts([]);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchProductDetails();
  }, [id]);
  

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select both size and color before adding to the cart.");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });
    toast.success("Product added to cart!");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <img
            src={product.secure_url}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-8 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg text-gray-700 mt-2">₦{product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
          <p className="mt-4 text-lg">{product.description}</p>

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Select Size:</h3>
            <div className="flex space-x-4 mt-2">
              {product.size.length > 0 ? (
                product.size.map((size, index) => (
                  <button
                    key={index}
                    className={`p-2 px-4 border rounded-md transition-colors ${selectedSize === size ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))
              ) : (
                <p>No sizes available</p>
              )}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Select Color:</h3>
            <div className="flex space-x-4 mt-2">
              {product.color.length > 0 ? (
                product.color.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border transition ${selectedColor === color ? "ring-4 ring-blue-500" : "ring-2 ring-gray-300"
                      }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))
              ) : (
                <p>No colors available</p>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-md w-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold">Related Products:</h3>
        <div className="flex overflow-x-auto space-x-4 mt-4">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct._id} className="w-64 flex-none">
                <img
                  src={relatedProduct.secure_url}
                  alt={relatedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h4 className="mt-2 font-semibold">{relatedProduct.name}</h4>
                <p className="text-gray-600">₦{relatedProduct.price.toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>No related products available</p>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
