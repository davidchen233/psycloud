import { useState, useEffect } from 'react';
import StuffedToysItem from './StuffedToysItem';
import Pagination from './Pagination';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PUBLIC_URL, API_URL } from '../../config/config';
import './StuffedToys.css';

const StuffedItem = () => {
  const [stuffed, setstuffed] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/products/category/1`);
    setstuffed(res.data);
    setFilteredProducts(res.data);
  }, []);

  const [search, setSearch] = useState('');
  const handleSearch = async (e) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      setFilteredProducts(stuffed);
    }
  };

  const handleFilter = () => {
    let filteredProduct = stuffed.filter((item) => {
      return item.name.includes(search);
    });
    setFilteredProducts(filteredProduct);
  };
  return (
    <div className="container">
      <section className="S-Title">
        <div>
          <h3>-絨毛抱枕-</h3>
        </div>
      </section>
      <div className="d-flex justify-content-between">
        <div class="buttons">
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

      <div className="flex-wrapper1">
        {filteredProducts.map((stuffeditem) => {
          return (
            <Link to={`/ProductDetails/${stuffeditem.id}`}>
              <StuffedToysItem
                key={stuffeditem.id}
                image={PUBLIC_URL + stuffeditem.image}
                name={stuffeditem.name}
                price={stuffeditem.price}
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

export default StuffedItem;
