import { useState, useEffect } from 'react';
import ProductPageItem from './ProductPageItem';
import ProductPageHot from './ProductPageHot';
import './productPage.css';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div className="container">
      <section className="Item">
        <div className="prouctpage-title">
          <h3>-紓壓商店-</h3>
        </div>

        <Link to="/StuffedToys" className="CategoryLink">
          <ProductPageItem title="絨毛抱枕" banner="/sources/bear.jpg" />
        </Link>
        <Link to="/Decors" className="CategoryLink categoryTitleLeft">
          <ProductPageItem title="療癒擺飾" banner="/sources/plant.jpg" />
        </Link>
        <Link to="/Relieve" className="CategoryLink">
          <ProductPageItem title="手指紓壓" banner="/sources/cube.jpg" />
        </Link>
      </section>

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
