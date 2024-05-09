import React from 'react';
import './PopularPost.css';
import MiniPopularPost from './MiniPopularPost/MiniPopularPost';
import { popularPost } from '../../utils/posts';

const PopularPost = () => {
  return (
    <div className="popular-post">
      <h3 className="h3-popular-post">Popular Post</h3>
      {popularPost.map((popularPost, index) => (
        <MiniPopularPost
          popularPostTitle={popularPost.title}
          popularPostDescription={popularPost.description}
          popularPostImg={popularPost.img}
          id={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default PopularPost;
