import React from 'react';
import './HomePage.css';
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';
import Category from '../../components/Category/Category';
import PopularPost from '../../components/PopularPost/PopularPost';

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <main className="home-content">
          <DisplayPosts />
          <nav className="left-navbar">
            <Category />
            <PopularPost />
          </nav>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
