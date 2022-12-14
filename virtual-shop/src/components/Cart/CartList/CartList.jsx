import React, { useContext } from 'react'
import CartContext from '../../../contexts/CartContext'
import CartProduct from './CartProduct';

export default function CartList() {
    const { cart } = useContext(CartContext);
  return (
    <div className='row'>
        {cart.map((product, index) => <CartProduct key={index} product={product}/>)}
    </div>
  )
}
