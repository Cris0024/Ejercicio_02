import React from 'react';
import { data } from '../data';

export const ProductList = ({ addToCart }) => {
  return (
    <div className="product-grid">
      {data.map(product => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar</button>
        </div>
      ))}
    </div>
  );
};
