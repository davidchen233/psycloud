import React from 'react';

const ProductPageItem = ({ title, banner }) => {
  return (
    <div className="product">
      <img
        className="product-img1"
        src={require('./images/productPage/bear.jpg').default}
        alt=""
      />
      <div className="image-text">
        <p>{title}</p>
        <div></div>
      </div>
    </div>
  );
};
export default ProductPageItem;
