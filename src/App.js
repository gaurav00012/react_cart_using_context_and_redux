import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './components/ProductDetails';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';


function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="cart" element={<CartPage/>} />
            <Route path="wishlist" element={<WishlistPage/>} />
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
