import { useState, useEffect } from 'react';
import ProductPageItem from './ProductPageItem';
import ProductPageHot from './ProductPageHot';
import './productPage.css';
import { Link } from 'react-router-dom';
import { PUBLIC_URL, API_URL } from '../../config/config';
import axios from 'axios';

const ProductPage = () => {
  const [hotproducts, sethotproducts] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/hotproducts`);
    sethotproducts(res.data);
  }, []);

  console.log(hotproducts);

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
        <div className="hot-product-title">
          <h3>-熱銷商品-</h3>
        </div>
        <div className="flex-wrapper">
          {hotproducts.map((hotproduct) => {
            return (
              <Link to={`/ProductDetails/${hotproduct.id}`}>
                <ProductPageHot
                  key={hotproduct.id}
                  sold={hotproduct.sold}
                  image={PUBLIC_URL + hotproduct.image}
                  name={hotproduct.name}
                  price={hotproduct.price}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
