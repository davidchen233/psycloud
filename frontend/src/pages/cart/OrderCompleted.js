import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const OrderCompleted = () => {
  return (
    <>
      <div className="container">
        <div className="CP-div w-50 mx-auto mt-5">
          <div className="CP-title">
            <h3>您已訂購完成</h3>
          </div>
        </div>
        <div className="d-grid gap-2 pt-3 d-md-flex justify-content-md-center">
          <Link to="/" className="CF-btn1 me-md-2 text-decoration-none">
            回到首頁
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderCompleted;
