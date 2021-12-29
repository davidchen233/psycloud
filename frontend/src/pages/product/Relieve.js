import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Pagination from './Pagination';
import './relieve.css';
import RelieveItem from './RelieveItem';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';
import { Link } from 'react-router-dom';

const Relieve = () => {
  const [relieve, setrelieve] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/category/3`);
    setrelieve(res.data);
    setFilteredProducts(res.data);
  }, []);

  const [search, setSearch] = useState('');
  const handleSearch = async (e) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      setFilteredProducts(relieve);
    }
  };

  const handleFilter = () => {
    let filteredProduct = relieve.filter((item) => {
      return item.name.includes(search);
    });
    setFilteredProducts(filteredProduct);
  };
  return (
    <div className="container">
      <section className="R-Title">
        <div>
          <h3>-手指紓壓-</h3>
        </div>
      </section>
      <div className="d-md-flex justify-content-between">
        <div class="buttons3">
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
        <div className="p-searchBox">
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

      <div className="flex-wrapper3">
        {filteredProducts.map((relieveitem) => {
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

      {/* <div>
        <Pagination />
      </div> */}
    </div>
  );
};

export default Relieve;
