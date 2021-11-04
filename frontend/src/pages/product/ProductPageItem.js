import React from 'react';

const ProductPageItem = () => {
  return (
    <div className="product">
      <img
        className="product-img1"
        src={require('./images/productPage/bear.jpg').default}
        alt=""
      />
      <div className="image-text">
        <p>手指紓壓</p>
        <div></div>
      </div>
    </div>
  );
};
export default ProductPageItem;
