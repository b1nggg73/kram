import React from 'react';
import './HomePage.css';
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';
import Category from '../../components/Category/Category';
import Tags from '../../components/Tags/Tags';
import PopularNews from '../../components/PopularNews/PopularNews';

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <main className="home-content">
          <DisplayPosts />
          <nav className="left-navbar">
            <Category />
            <Tags />
            <PopularNews />
          </nav>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
