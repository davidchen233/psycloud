import './products.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <section className="h-section">
      <h2>-- 減壓小物 --</h2>
      <div className="d-flex justify-content-between">
        <div></div>
        <NavLink to="/products" className="seeMore text-center">
          See More
        </NavLink>
      </div>
      <div className="product-container">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Products;
