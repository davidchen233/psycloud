import './products.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { PUBLIC_URL, API_URL } from '../../config/config';
import axios from 'axios';

const Products = () => {
  const [hotproducts, sethotproducts] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/hotproducts`);
    sethotproducts(res.data);
  }, []);
  return (
    <section className="h-section mb-0">
      <h2>-- 減壓小物 --</h2>
      <div className="d-flex justify-content-between">
        <div></div>
        <Link to="/product" className="seeMore text-center">
          See More
        </Link>
      </div>
      <div className="product-container">
        {hotproducts.map((hotproduct) => {
          return (
            <Product
              key={hotproduct.id}
              id={hotproduct.id}
              sold={hotproduct.sold}
              image={PUBLIC_URL + hotproduct.image}
              name={hotproduct.name}
              price={hotproduct.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
