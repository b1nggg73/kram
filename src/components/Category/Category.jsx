import React, { useState } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

const Category = ({ activeCategory, setActiveCategory, pagination, currentPage }) => {
  const categorys = ['Все', 'Заработок на сайтах', 'Заработок на ютубе', 'Заработок на тиктоке'];

  function handleCategory(index) {
    setActiveCategory(index);
    pagination(1);
  }

  return (
    <div className="category">
      <h3 className="h3-category">Категории</h3>
      <ul className="ul-category">
        {categorys.map((category, index) =>
          index === activeCategory ? (
            <li
              onClick={() => {
                handleCategory(index);
              }}
              className="li-category li-category__active"
              key={index}>
              {category}
            </li>
          ) : (
            <li className="li-category" onClick={() => handleCategory(index)} key={index}>
              {category}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Category;
