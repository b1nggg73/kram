import React, { useState } from 'react';
import './HomePage.css';
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';
import Category from '../../components/Category/Category';
import PostsClass from '../../store/PostsClass';
import Pagintaion from '../../components/Pagination/Pagintaion';

const HomePage = () => {
  const { posts } = PostsClass;
  const [currentPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndexPost = currentPage * currentPerPage;
  const firstIndexPost = lastIndexPost - currentPerPage;
  const [activeCategory, setActiveCategory] = useState(0);
  const postsOnPageAll = posts.slice(firstIndexPost, lastIndexPost);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="home">
      <div className="container">
        <main className="home-content">
          <div className="home-content-posts">
            <DisplayPosts postsOnPage={postsOnPageAll} activeCategory={activeCategory} />
            <Pagintaion
              totalPosts={
                activeCategory === 0
                  ? posts.length
                  : posts.filter((post) => post.category === activeCategory).length
              }
              currentPerPage={currentPerPage}
              pagination={pagination}
              currentPage={currentPage}
            />
          </div>

          <nav className="left-navbar">
            <Category
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              pagination={pagination}
              currentPage={currentPage}
            />
          </nav>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
