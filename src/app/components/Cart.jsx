import React from 'react';

export const Cart = ({ cartItems, removeFromCart, updateQuantity, total }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 && <p>El carrito está vacío</p>}
      {cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <input 
            type="number" 
            value={item.quantity} 
            onChange={(e) => updateQuantity(item, e.target.value)} 
          />
          <button onClick={() => removeFromCart(item)}>Eliminar</button>
        </div>
      ))}
      <h3>Total a Pagar: ${total}</h3>
    </div>
  );
};
