import React, { useContext, useEffect } from 'react'
import ProductList from './Products/ProductList'
import CartContext from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Shop() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [products, setProducts] = React.useState([]);
  // Fetch products from API with useEffect
  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setProducts(data))

  }, [])
  
  const numberOfProducts = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  const cartDisabled = () => {
    return numberOfProducts() === 0;
  }

  return (
    <div>
      <div> 
        <h1 className="display-3 text-center">Virtual Shop</h1>
      </div>
      <div className='text-center'>
        <button 
          className="btn btn-light"
          onClick={() => navigate('/cart')}
          disabled={cartDisabled()}
        
        >
            {numberOfProducts()} 
            <FontAwesomeIcon icon={faCartShopping}/>
        </button>
      </div>
      <ProductList products={products}></ProductList>
    </div>
  )
}
