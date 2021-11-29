import { useState, useEffect } from 'react';
import './StuffedToys.css';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
// import usePagination from './usePagination';

const Pagination = (props) => {
  // const {
  //   onPageChange,
  //   totalCount,
  //   siblingCount = 1,
  //   currentPage,
  //   pageSize,
  //   className,
  // } = props;
  // const paginationRange = usePagination({
  //   currentPage,
  //   totalCount,
  //   siblingCount,
  //   pageSize,
  // });
  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }
  // const onNext = () => {
  //   onPageChange(currentPage + 1);
  // };

  // const onPrevious = () => {
  //   onPageChange(currentPage - 1);
  // };
  // let lastPage = paginationRange[paginationRange.length - 1];
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
