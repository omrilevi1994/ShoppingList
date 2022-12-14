import React, { useState } from 'react';
import CartContext from '../contexts/CartContext';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if(cart.find((p) => p.name === product.name)) {
            setCart(cart.map((p) => p.name === product.name ? {...p, quantity: p.quantity + 1} : p))
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }
    }

    const removeFromCart = (product) => {
        // Quantity is 1, remove the product from the cart
        if(product.quantity === 1) {
            setCart(cart.filter((p) => p.name !== product.name))
            return;
        }
        
        // Quantity is more than 1, decrease the quantity by 1
        setCart(cart.map((p) => p.name === product.name ? {...p, quantity: p.quantity - 1} : p))
    }

    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;