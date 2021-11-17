import { useState, useEffect } from 'react';
import StuffedToysItem from './StuffedToysItem';
import Pagination from './Pagination';
import { FaSearch } from 'react-icons/fa';
import './StuffedToys.css';

const StuffedItem = () => {
  return (
    <div className="container">
      <section className="S-Title">
        <div>
          <h3>-絨毛抱枕-</h3>
        </div>
      </section>
      <div></div>
      <div class="buttons">
        <button className="button1">絨毛抱枕</button>
        <button className="button1">療癒擺飾</button>
        <button className="button1">手指紓壓</button>
      </div>
      <div className="search">
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

      <div className="flex-wrapper1">
        <StuffedToysItem />
        <StuffedToysItem />
        <StuffedToysItem />
        <StuffedToysItem />
      </div>
      <div className="flex-wrapper1">
        <StuffedToysItem />
        <StuffedToysItem />
        <StuffedToysItem />
        <StuffedToysItem />
      </div>
      <div className="flex-wrapper1">
        <StuffedToysItem />
        <StuffedToysItem />
        <StuffedToysItem />
        <StuffedToysItem />
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default StuffedItem;
