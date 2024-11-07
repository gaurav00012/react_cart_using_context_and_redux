import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import { fetchProductById } from '../api/storeApi';

function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);

    useEffect(() => {
        getProductById();
    },[id]);

    const getProductById = async () => {
        const response = await fetchProductById(id)
        setProduct(response);
    }

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p><strong>Price: </strong>${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)} className="btn btn-success me-2">Add to Cart</button>
                    <button onClick={() => addToWishlist(product)} className="btn btn-warning">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
