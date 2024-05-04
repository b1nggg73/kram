import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/header/header-logo.png';
import gmailLogo from '../../images/communication/gmail-logo.svg';
import telegramLogo from '../../images/communication/telegram-logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <Link to="/">
              <img src={footerLogo} alt="" />
            </Link>
          </div>
          <div className="communication">
            <h3>Связаться с нами: </h3>
            <div className="social-network">
              <div className="social-network__telegram">
                <Link className="social-network__telegram-link">
                  <div className="logo-telegram">
                    <img src={telegramLogo} alt="" />
                  </div>
                  <div className="communication-telegram">@qwerty_0101010</div>
                </Link>
              </div>
              <div className="social-network__gmail">
                <Link className="social-network__gmail-link">
                  <div className="logo-gmail">
                    <img src={gmailLogo} alt="" />
                  </div>
                  <div className="communication-gmail">demolutionclub@gmail.com</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
