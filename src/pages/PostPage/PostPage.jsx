import React from 'react';
import Category from '../../components/Category/Category';
import PopularPost from '../../components/PopularPost/PopularPost';
import './PostPage.css';
import PostContent from '../../components/PostContent/PostContent';
import { useLocation } from 'react-router-dom';
import { posts } from '../../utils/posts';

const PostPage = () => {
  const location = useLocation();
  const postId = location.pathname[location.pathname.length - 1];

  return (
    <div className="post">
      <div className="container">
        <main className="post-content">
          <PostContent
            postInfoImg={posts[postId - 1].img}
            postInfoTitle={posts[postId - 1].title}
            postInfoDescription={posts[postId - 1].description}
          />
          <nav className="left-navbar">
            <Category />
            <PopularPost />
          </nav>
        </main>
      </div>
    </div>
  );
};

export default PostPage;
