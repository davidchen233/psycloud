import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Pagination from './Pagination';
import './relieve.css';
import RelieveItem from './RelieveItem';

const Relieve = () => {
  return (
    <div className="container">
      <section className="R-Title">
        <div>
          <h3>-手指紓壓-</h3>
        </div>
      </section>
      <div></div>
      <div class="buttons3">
        <button className="button3">絨毛抱枕</button>
        <button className="button3">療癒擺飾</button>
        <button className="button3">手指紓壓</button>
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
      <div className="flex-wrapper3">
        <RelieveItem />
        <RelieveItem />
        <RelieveItem />
        <RelieveItem />
      </div>
      <div className="flex-wrapper3">
        <RelieveItem />
        <RelieveItem />
        <RelieveItem />
        <RelieveItem />
      </div>
      <div className="flex-wrapper3">
        <RelieveItem />
        <RelieveItem />
        <RelieveItem />
        <RelieveItem />
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Relieve;
