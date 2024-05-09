import React from 'react';
import './MiniPopularPost.css';
import miniPostImg from '../../../images/Post/post-img.png';
import { useNavigate } from 'react-router-dom';

const MiniPopularPost = ({ popularPostImg, popularPostTitle, popularPostDescription, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="mini-popular-post"
      onClick={() => {
        navigate(`/post/${++id}`);
      }}>
      <div className="mini-popular-post-img">
        <img src={popularPostImg} alt="" />
      </div>
      <div className="mini-popular-post-info">
        <h3 className="mini-popular-post-title">{popularPostTitle}</h3>
        <h3 className="mini-popular-post-discription">{popularPostDescription}</h3>
      </div>
    </div>
  );
};

export default MiniPopularPost;
