import React from 'react';
import './productPage.css';

const ProductPageHot = () => {
  return (
    <div className="hotitem">
      <p>No.1</p>
      <div className="justify-content-center align-items-center">
        <div className="hotImg mb-3">
          <img src={require('./images/relieveStress/22.jpg').default} alt="" />
        </div>
        <div>
          <h5>柴犬捏捏樂</h5>
          <h4>$290</h4>
        </div>
      </div>
    </div>
  );
};
export default ProductPageHot;
