import React from 'react';
import './Post.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Post = ({ id, postImg, postTitle, postDescription }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`post/${id}`);
      }}
      className="post">
      <div className="post-img">
        <img src={postImg} alt="" />
      </div>
      <h3 className="title-post">{postTitle}</h3>
      <h4 className="discription-post">{postDescription}</h4>
    </div>
  );
};

export default Post;
