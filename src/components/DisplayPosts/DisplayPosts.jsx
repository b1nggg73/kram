import React from 'react';
import './DisplayPosts.css';
import Post from '../Post/Post';
import { posts } from '../../utils/posts';

const DisplayPosts = () => {
  return (
    <div className="display-post">
      {posts.map((post, index) => (
        <Post
          postTitle={post.title}
          postImg={post.img}
          postDescription={post.description}
          key={index}
          id={++index}
        />
      ))}
    </div>
  );
};

export default DisplayPosts;
