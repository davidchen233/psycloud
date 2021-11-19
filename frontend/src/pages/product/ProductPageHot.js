import React from 'react';

const ProductPageHot = ({ sold, image, name, price }) => {
  return (
    <div>
      <p>已售出 {sold}</p>
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
