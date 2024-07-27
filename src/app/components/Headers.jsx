import React from 'react';

export const Header = ({ countProducts }) => {
  return (
    <header className="header">
      <h1>Jaguar Sport</h1>
      <div className="cart-icon">
        <img src="/carrito.png" alt="cart" />
        <span className="cart-count">{countProducts}</span>
      </div>
    </header>
  );
};




