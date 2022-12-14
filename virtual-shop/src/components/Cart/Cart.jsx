import React, { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import CartList from './CartList/CartList';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const onBuy = () => {
    // Send cart to API
    fetch('http://localhost:8080/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            products: cart,
            total: cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
        })
    })
    setCart([]);
    navigate('/');
  }

  const onGoBack = () => {
    navigate('/');
  }

  const buyDisabled = () => {
    return cart.length === 0;
}


  return (
    <div>
        <h1 className="display-3 text-center">Cart</h1>
        <div className='text-center'>
            <button className="btn btn-light" onClick={onGoBack}>Continue Shopping</button>
        </div>
        <div className='container mt-5'>
            <CartList/>
        </div>
        <h5 className='text-center'>
            Final price: {cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}
        </h5>
        <div className='text-center'>
            <button className="btn btn-light justify-center" disabled={buyDisabled()} onClick={onBuy}>Buy</button>
        </div>
    </div>
  )
}
