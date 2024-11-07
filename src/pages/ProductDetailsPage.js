import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/storeApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { addToWishlist } from '../slices/wishlistSlice';

function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

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
                    <button onClick={() => dispatch(addToCart(product))} className="btn btn-success me-2">Add to Cart</button>
                    <button onClick={() => dispatch(addToWishlist(product))} className="btn btn-warning">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
