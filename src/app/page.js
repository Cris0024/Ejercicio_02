"use client"; 

import React, { useState } from 'react';
import { Header } from './components/Headers'; 
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setTotal(total + product.price);
    setCountProducts(countProducts + 1); 
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item
        )
      );
    }
    setTotal(total - product.price);
    setCountProducts(countProducts - 1); 
  };

  const updateQuantity = (product, quantity) => {
    const exist = cartItems.find(item => item.id === product.id);
    const newQuantity = parseInt(quantity, 10);
    if (newQuantity > 0) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...exist, quantity: newQuantity } : item
        )
      );
      setTotal(total - exist.price * exist.quantity + exist.price * newQuantity);
      setCountProducts(countProducts - exist.quantity + newQuantity);
    } else {
      removeFromCart(product);
    }
  };

  return (
    <div className="App">
      <Header countProducts={countProducts} />
      <div className="main-content">
        <ProductList addToCart={addToCart} />
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateQuantity} 
          total={total} 
        />
      </div>
    </div>
  );
}

export default Home;







