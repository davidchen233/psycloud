import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Pagination from './Pagination';
import './relieve.css';
import RelieveItem from './RelieveItem';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';
import Decors from './Decors';
import { Link } from 'react-router-dom';

const Relieve = () => {
  const [relieve, setrelieve] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/category/3`);
    setrelieve(res.data);
  }, []);
  console.log(relieve);

  return (
    <div className="container">
      <section className="R-Title">
        <div>
          <h3>-手指紓壓-</h3>
        </div>
      </section>
      <div className="d-flex justify-content-between">
        <div class="buttons3">
          <button className="button3">絨毛抱枕</button>
          <button className="button3">療癒擺飾</button>
          <button className="button3">手指紓壓</button>
        </div>
        <div>
          <input
            className="btn-search-area "
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button class="btn-search">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex-wrapper3">
        {relieve.map((relieveitem) => {
          return (
            <Link to={`/ProductDetails/${relieveitem.id}`}>
              <RelieveItem
                key={relieveitem.id}
                image={PUBLIC_URL + relieveitem.image}
                name={relieveitem.name}
                price={relieveitem.price}
              />
            </Link>
          );
        })}
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Relieve;
