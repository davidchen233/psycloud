import React, { useState, useEffect } from 'react';
import CartSection from './CartSection';
import CheckoutFormSection from './CheckoutFormSection';
import CreditCards from './CreditCards';
import './checkoutFormSection.css';
import './cart.css';

const Cart = () => {
  const [cartInfo, setCartInfo] = useState({});
  return (
    <div className="container">
      <div className="Cart-Title mb-4">
        <h3>-購物車-</h3>
        <div className="cart-div">
          <CartSection setCartInfo={setCartInfo} />
        </div>
      </div>
      <div className="row checkform ">
        <div className="col-md-5 checkout-div">
          <div className="checkout-Title">
            <h3 class="CF-h3">-會員資料-</h3>
          </div>
          <div className="CF-body">
            <form>
              <div className="form-group cf-group mb-3">
                <input type="text" size="40" placeholder="姓名" />
                <input
                  type="text"
                  size="40"
                  maxlength="10"
                  placeholder="手機"
                />
                <input
                  type="text"
                  size="40"
                  maxlength="10"
                  placeholder="宅配地址"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6 checkout-div3">
          <div className="checkout-Title">
            <h3 class="CF-h3">-付款方式-</h3>
          </div>
          <div className="creditCard">
            <CreditCards />
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 pt-5 d-md-flex justify-content-md-end">
        <button className="CF-btn1 me-md-2" type="button">
          繼續逛逛
        </button>

        <button
          className="CF-btn2"
          type="button"
          onClick={() => {
            console.log(cartInfo);
          }}
        >
          下一步
        </button>
      </div>
    </div>
  );
};

export default Cart;
