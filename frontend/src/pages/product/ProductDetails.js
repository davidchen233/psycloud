import React from 'react';
import ProductDetailsSection from './ProductDetailsSection';
import ProductDetailSeemore from './ProductDetailSeemore';
import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <>
      <ProductDetailsSection samplepic="/sources/sample.jpg" />
      <ProductDetailSeemore samplepic="/sources/sample.jpg" />
    </>
  );
};

export default ProductDetails;
