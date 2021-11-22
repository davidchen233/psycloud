import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Pagination from './Pagination';
import './Decors.css';
import DecorsItem from './DecorsItem';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';
import { Link } from 'react-router-dom';

const Decors = () => {
  const [decors, setdecors] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/category/2`);
    setdecors(res.data);
  }, []);
  console.log(decors);

  return (
    <div className="container">
      <section className="D-Title">
        <div>
          <h3>-療癒擺飾-</h3>
        </div>
      </section>
      <div className="d-flex justify-content-between">
        <div class="buttons2">
          <button className="button2">絨毛抱枕</button>
          <button className="button2">療癒擺飾</button>
          <button className="button2">手指紓壓</button>
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

      <div className="flex-wrapper2">
        {decors.map((decorsitem) => {
          return (
            <Link to={`/ProductDetails/${decorsitem.id}`}>
              <DecorsItem
                key={decorsitem.id}
                image={PUBLIC_URL + decorsitem.image}
                name={decorsitem.name}
                price={decorsitem.price}
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

export default Decors;
