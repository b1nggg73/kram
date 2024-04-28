import React from 'react';
import headerLogo from '../../images/header/header-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={headerLogo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
