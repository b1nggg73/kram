import React from 'react';
import './PostContent.css';
import { Link, useNavigate } from 'react-router-dom';

const PostContent = ({ postInfoTitle, postInfoDescription, postInfoImg }) => {
  const navigate = useNavigate();
  return (
    <div className="post-info">
      <Link
        onClick={() => {
          navigate(-1);
        }}
        className="backBtns btns">
        <span>{'❮'}</span>
      </Link>
      <div className="post-info-img">
        <img src={postInfoImg} alt="" />
      </div>
      <h2 className="post-info-title">{postInfoTitle}</h2>
      <p className="post-info-description">{postInfoDescription}</p>
      <Link
        onClick={() => {
          navigate(-1);
        }}
        className="backBtns btns">
        <span>{'❮'}</span>
      </Link>
    </div>
  );
};

export default PostContent;
