import React from 'react';
import './PostContent.css';

const PostContent = ({ postInfoTitle, postInfoDescription, postInfoImg }) => {
  return (
    <div className="post-info">
      <div className="post-info-img">
        <img src={postInfoImg} alt="" />
      </div>
      <h2 className="post-info-title">{postInfoTitle}</h2>
      <p className="post-info-description">{postInfoDescription}</p>
    </div>
  );
};

export default PostContent;
