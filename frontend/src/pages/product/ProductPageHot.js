import React from 'react';
import { ImFire } from 'react-icons/im';

const ProductPageHot = ({ sold, image, name, price }) => {
  return (
    <div>
      <p className="d-flex align-items-center justify-content-center">
        <ImFire color="#FF4646" className="me-2" size="20" />
        已售出 {sold}
      </p>
      <div className="justify-content-center align-items-center">
        <div className="hotImg mb-3">
          <img src={image} alt="" />
        </div>
        <div>
          <h5>{name}</h5>
          <h4>${price}</h4>
        </div>
      </div>
    </div>
  );
};
export default ProductPageHot;
