import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <div className="card-title">{product.name}</div>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Precio: ${product.price.toFixed(2)}</p>
        <a href="#" className="btn btn-success">Más información</a>
      </div>
    </div>
  );
}

export default ProductCard;


