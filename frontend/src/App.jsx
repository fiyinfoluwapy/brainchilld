import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdventureWB from "@/components/AdventureWB";
import Perks from "@/components/Perks";
import ProductCarousel from "@/components/ProductCarousel";
import { BrowserRouter as Router } from "react-router-dom";
import FeaturedProducts from "./components/FeaturedProducts";
import FollowUsBanner from "./components/FollowUsBanner";

export default function RootLayout({ children }) {
  return (
    <Router>
      <CartProvider>
        <div >
          <Navbar />
          <HeroSection />
          <AdventureWB />
          <Perks />
          <ProductCarousel />
          <FeaturedProducts />
          <FollowUsBanner />
          {children} {/* Render the rest of the app */}
        </div>
      </CartProvider>
    </Router>
  );
}
