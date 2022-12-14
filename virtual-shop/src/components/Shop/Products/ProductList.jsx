import React from 'react';
import Product from './Product';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="container mt-5">
        <div className="row">
            {products.map((product, index) => (
                <Product key={index} product={product} addToCart={addToCart}></Product>
            ))}
        </div>
    </div>
  )
}
