import React from 'react';
import './DisplayPosts.css';
import Post from '../Post/Post';

const posts = [1, 2, 3, 4, 5, 6];

const DisplayPosts = () => {
  return (
    <div className="display-post">
      {posts.map((post, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};

export default DisplayPosts;
