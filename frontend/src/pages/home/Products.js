import './products.css';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
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
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Products;
