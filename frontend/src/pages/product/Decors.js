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
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/category/2`);
    setdecors(res.data);
    setFilteredProducts(res.data);
  }, []);

  const [search, setSearch] = useState('');
  const handleSearch = async (e) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      setFilteredProducts(decors);
    }
  };

  const handleFilter = () => {
    let filteredProduct = decors.filter((item) => {
      return item.name.includes(search);
    });
    setFilteredProducts(filteredProduct);
  };

  return (
    <div className="container">
      <section className="D-Title">
        <div>
          <h3>-療癒擺飾-</h3>
        </div>
      </section>
      <div className="d-flex justify-content-between">
        <div class="buttons2">
          <Link to="/StuffedToys">
            <button className="button1">絨毛抱枕</button>
          </Link>
          <Link to="/Decors">
            <button className="button1">療癒擺飾</button>
          </Link>
          <Link to="/Relieve">
            <button className="button1">手指紓壓</button>
          </Link>
        </div>
        <div>
          <input
            className="btn-search-area "
            type="text"
            placeholder="Search.."
            name="search"
            value={search}
            onChange={handleSearch}
            onKeyPress={(e) => {
              e.key === 'Enter' && handleFilter();
            }}
          />
          <button class="btn-search" onClick={handleFilter}>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex-wrapper2">
        {filteredProducts.map((decorsitem) => {
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

      {/* <div>
        <Pagination />
      </div> */}
    </div>
  );
};

export default Decors;
