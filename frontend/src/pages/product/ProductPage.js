import { useState, useEffect } from 'react';
import ProductPageItem from './ProductPageItem';
import ProductPageHot from './ProductPageHot';
import './productPage.css';

const ProductPage = () => {
  return (
    <div className="container">
      <section className="Item">
        <div>
          <h3>-紓壓商店-</h3>
        </div>
        <div>
          <ProductPageItem />
          <ProductPageItem />
          <ProductPageItem />
        </div>
      </section>
      <div></div>

      <section className="hot">
        <div>
          <h3>-熱銷商品-</h3>
        </div>
        <div className="flex-wrapper">
          <ProductPageHot />
          <ProductPageHot />
          <ProductPageHot />
          <ProductPageHot />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
