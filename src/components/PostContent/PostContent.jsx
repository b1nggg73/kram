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
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_37_5163)">
            <path
              d="M9.10338 11.8536C9.29887 11.6581 9.29887 11.3421 9.10338 11.1466L3.95699 6.00023L9.10338 0.853837C9.29887 0.658349 9.29887 0.342348 9.10338 0.14686C8.9079 -0.0486279 8.59189 -0.0486279 8.39641 0.14686L2.89652 5.64675C2.79902 5.74425 2.75001 5.87224 2.75001 6.00025C2.75001 6.12826 2.79902 6.25625 2.89652 6.35375L8.39641 11.8536C8.59189 12.0491 8.9079 12.0491 9.10338 11.8536Z"
              fill="#5B41F5"
            />
          </g>
          <defs>
            <clipPath id="clip0_37_5163">
              <rect width="12" height="12" fill="white" transform="translate(12) rotate(90)" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <div className="post-info-img">
        <img src={postInfoImg} alt="" />
      </div>
      <h2 className="post-info-title">{postInfoTitle}</h2>
      <p className="post-info-description">{postInfoDescription}</p>
    </div>
  );
};

export default PostContent;
