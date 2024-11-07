import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import { fetchAllProducts } from '../api/storeApi';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);
  
  const getAllProducts = async () => {
    try {
        const getProduct = await fetchAllProducts();
        setProducts(getProduct);
      }
      catch (error) {
        console.log(error.message);
      }
  }
  

  return (
    <div className="container mt-4">
      <h1 className="text-center">Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
