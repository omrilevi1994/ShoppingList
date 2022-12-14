import React from 'react';
import {   RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import CartProvider from './providers/CartProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop/>,
  },
  {
    path: 'cart',
    element: <Cart/>,
  },
]);



function App() {
  return (
    <div className="App">
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </div>
  );
}

export default App;
