import React, { useState } from 'react';
import './DisplayPosts.css';
import Post from '../Post/Post';

const DisplayPosts = ({ postsOnPage, activeCategory }) => {
  return (
    <div className="display-post">
      {activeCategory === 0 ? (
        postsOnPage.map((post, index) => (
          <Post
            postTitle={post.title}
            postImg={post.img}
            postDescription={post.description}
            postViews={post.views}
            key={index}
            id={post.id + 1}
          />
        ))
      ) : postsOnPage.filter((post) => post.category === activeCategory).length === 0 ? (
        <h3 className="not-found">{'Ничего не нашлось :('}</h3>
      ) : (
        postsOnPage
          .filter((post) => post.category === activeCategory)
          .map((post, index) => (
            <Post
              postTitle={post.title}
              postImg={post.img}
              postDescription={post.description}
              postViews={post.views}
              key={index}
              id={post.id + 1}
            />
          ))
      )}
    </div>
  );
};

export default DisplayPosts;
