import React from 'react';
import './PopularPost.css';
import MiniPopularPost from './MiniPopularPost/MiniPopularPost';

const popularPosts = [1, 2, 3];

const PopularPost = () => {
  return (
    <div className="popular-post">
      <h3 className="h3-popular-post">Popular Post</h3>
      {popularPosts.map((popularPost, index) => (
        <MiniPopularPost key={index} />
      ))}
    </div>
  );
};

export default PopularPost;
