import React from 'react';
import './Pagination.css';
import { Link } from 'react-router-dom';

const Pagintaion = ({ totalPosts, currentPerPage, pagination, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPosts / currentPerPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <Link
        to={''}
        className="prevButton btns"
        onClick={() => {
          if (currentPage - 1 <= 0) {
          } else {
            pagination(--currentPage);
          }
        }}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_37_5163)">
            <path
              d="M9.10338 11.8536C9.29887 11.6581 9.29887 11.3421 9.10338 11.1466L3.95699 6.00023L9.10338 0.853837C9.29887 0.658349 9.29887 0.342348 9.10338 0.14686C8.9079 -0.0486279 8.59189 -0.0486279 8.39641 0.14686L2.89652 5.64675C2.79902 5.74425 2.75001 5.87224 2.75001 6.00025C2.75001 6.12826 2.79902 6.25625 2.89652 6.35375L8.39641 11.8536C8.59189 12.0491 8.9079 12.0491 9.10338 11.8536Z"
              fill="#5B41F5"
            />
          </g>
          <defs>
            <clipPath id="clip0_37_5163">
              <rect width="12" height="12" fill="white" transform="translate(12) rotate(90)" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <ul className="ul-pagination">
        {pageNumbers.map((number, id) => (
          <li
            className="li-pagination"
            key={id}
            onClick={() => {
              pagination(number);
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
      <Link
        to={''}
        className="nextButton btns"
        onClick={() => {
          if (currentPage + 1 > pageNumbers.length) {
          } else {
            pagination(++currentPage);
          }
        }}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_37_5168)">
            <path
              d="M2.89662 0.146382C2.70113 0.34187 2.70113 0.657871 2.89662 0.853359L8.04301 5.99977L2.89662 11.1462C2.70113 11.3417 2.70113 11.6577 2.89662 11.8531C3.0921 12.0486 3.40811 12.0486 3.60359 11.8531L9.10348 6.35325C9.20098 6.25575 9.24999 6.12776 9.24999 5.99975C9.24999 5.87174 9.20098 5.74375 9.10348 5.64625L3.60359 0.146359C3.40811 -0.0491056 3.0921 -0.0491056 2.89662 0.146382Z"
              fill="#5B41F5"
            />
          </g>
          <defs>
            <clipPath id="clip0_37_5168">
              <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default Pagintaion;
