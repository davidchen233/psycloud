import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Pagination from './Pagination';
import './Decors.css';
import DecorsItem from './DecorsItem';

const Decors = () => {
  return (
    <div className="container">
      <section className="D-Title">
        <div>
          <h3>-療癒擺飾-</h3>
        </div>
      </section>
      <div></div>
      <div class="buttons2">
        <button className="button2">絨毛抱枕</button>
        <button className="button2">療癒擺飾</button>
        <button className="button2">手指紓壓</button>
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

      <div className="flex-wrapper2">
        <DecorsItem />
        <DecorsItem />
        <DecorsItem />
        <DecorsItem />
      </div>
      <div className="flex-wrapper2">
        <DecorsItem />
        <DecorsItem />
        <DecorsItem />
        <DecorsItem />
      </div>
      <div className="flex-wrapper2">
        <DecorsItem />
        <DecorsItem />
        <DecorsItem />
        <DecorsItem />
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Decors;
