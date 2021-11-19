import { useState, useEffect } from 'react';
import './StuffedToys.css';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination  justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">
              <MdArrowLeft size={24} />
            </span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">
              <MdArrowRight size={24} />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
