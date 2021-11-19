import { useState, useEffect } from 'react';
import Checkpageform from './Checkpageform';
import { Link } from 'react-router-dom';
import './checkpage.css';

const Checkpage = () => {
  return (
    <>
      <div className="container">
        <div className="CP-title">
          <h3>-訂單確認-</h3>
        </div>
        <div className="CP-div w-50 mx-auto">
          <Checkpageform />
        </div>
      </div>
      <div className="d-grid gap-2 pt-5 d-md-flex justify-content-md-center">
        <Link to="/Cart">
          <button className="CF-btn1 me-md-2" type="button">
            回上一頁
          </button>
        </Link>
        <button className="CF-btn2" type="button">
          確定結帳
        </button>
      </div>
    </>
  );
};

export default Checkpage;
