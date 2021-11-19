import React, { useState, useEffect } from 'react';
import CartSection from './CartSection';
import CheckoutFormSection from './CheckoutFormSection';
import './cart.css';

const Cart = () => {
  return (
    <div className="container">
      <div className="Cart-Title mb-4">
        <h3>-購物車-</h3>
        <div className="cart-div">
          <CartSection />
        </div>
      </div>

      <section>
        <div className="container">
          <CheckoutFormSection />
        </div>
      </section>
    </div>
  );
};

export default Cart;
