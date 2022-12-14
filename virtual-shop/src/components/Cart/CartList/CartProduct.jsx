import React, { useContext } from 'react'
import CartContext from '../../../contexts/CartContext'
export default function CartProduct({product}) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className="col-md-4">
        <div className="card p-3">
            <div className="d-flex flex-row mb-3">
                <img src={product.image} alt={product.name} width="200" height="200"/>
                <div className="d-flex flex-column ml-2 product-name">
                    <span>{product.name}</span>
                    <div>
                    
                </div>
                </div>
            </div>
            <h6>{product.description}</h6>
            <div className="d-flex justify-content-between bottom mt-3">
            <button className="btn btn-light" onClick={() => removeFromCart(product)}>-</button>
            <p>{product.quantity}</p>
            <button className="btn btn-light" onClick={() => addToCart(product)}>+</button>
            </div>
        </div>
    </div>
  )
}
