import React from 'react';
import './MiniPopularPost.css';
import miniPostImg from '../../../images/Post/post-img.png';

const MiniPopularPost = () => {
  return (
    <div className="mini-popular-post">
      <div className="mini-popular-post-img">
        <img src={miniPostImg} alt="" />
      </div>
      <div className="mini-popular-post-info">
        <h3 className="mini-popular-post-title">Name news here</h3>
        <h3 className="mini-popular-post-discription">FROG is a deflationary token with</h3>
      </div>
    </div>
  );
};

export default MiniPopularPost;
