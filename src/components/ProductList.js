import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
