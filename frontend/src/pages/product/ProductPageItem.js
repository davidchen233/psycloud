import React from 'react';

const ProductPageItem = ({ title, banner }) => {
  return (
    <div className="product">
      <div className="product-img1">
        <img src={banner} alt="" />
      </div>
      <div className="image-text">
        <p>{title}</p>
        <div></div>
      </div>
    </div>
  );
};
export default ProductPageItem;
