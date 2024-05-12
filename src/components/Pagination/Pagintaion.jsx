import React from 'react';
import './Pagination.css';
import { Link } from 'react-router-dom';

const Pagintaion = ({ totalPosts, currentPerPage, pagination, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / currentPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.length != 0 ? (
        <Link
          to={''}
          className="prevButton btns"
          onClick={() => {
            if (currentPage - 1 <= 0) {
            } else {
              pagination(--currentPage);
              window.scrollTo({ top: 0 });
            }
          }}>
          <span>{'❮'}</span>
        </Link>
      ) : (
        ''
      )}
      <ul className="ul-pagination">
        {pageNumbers.map((number, id) => (
          <li
            className="li-pagination"
            key={id}
            onClick={() => {
              pagination(number);
              window.scrollTo({ top: 0 });
            }}>
            {currentPage === number ? (
              <Link to={''} className="a-pagination a-pagination-active">
                {number}
              </Link>
            ) : (
              <Link to={''} className="a-pagination">
                {number}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {pageNumbers.length != 0 ? (
        <Link
          to={''}
          className="nextButton btns"
          onClick={() => {
            if (currentPage + 1 > pageNumbers.length) {
            } else {
              pagination(++currentPage);
              window.scrollTo({ top: 0 });
            }
          }}>
          <span>{'❯'}</span>
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default Pagintaion;
