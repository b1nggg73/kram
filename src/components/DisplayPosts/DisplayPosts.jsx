import React, { useState } from 'react';
import './DisplayPosts.css';
import Post from '../Post/Post';

const DisplayPosts = ({ postsOnPage }) => {
  return (
    <div className="display-post">
      {postsOnPage.map((post, index) => (
        <Post
          postTitle={post.title}
          postImg={post.img}
          postDescription={post.description}
          postViews={post.views}
          key={index}
          id={++index}
        />
      ))}
    </div>
  );
};

export default DisplayPosts;
