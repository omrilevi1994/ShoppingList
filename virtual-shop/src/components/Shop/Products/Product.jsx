import React, { useContext } from 'react'
import CartContext from '../../../contexts/CartContext'
import './Product.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product({ product}) {
    const { addToCart } = useContext(CartContext);
  return (
    <div className="col-md-4">
        <div className="card p-3">
            <div className="d-flex flex-row mb-3">
                <img src={product.image} alt={product.name} width="200" height="200"/>
                <div className="d-flex flex-column ml-2 product-name">
                    <span>{product.name}</span>
                    <span className="text-black-50">$ {product.price}</span>
                </div>
            </div>
            <h6>{product.description}</h6>
            <div className="d-flex justify-content-between bottom mt-3">
                <span className="add-to-cart text-primary" onClick={() => addToCart(product)}><FontAwesomeIcon icon={faPlus}/> Add to cart</span></div>
        </div>
    </div>
  )
}
