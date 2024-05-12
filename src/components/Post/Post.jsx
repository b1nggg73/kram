import React from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import views from '../../../src/images/Post/views.svg';
import PostsClass from '../../store/PostsClass';
import { observer } from 'mobx-react-lite';

const Post = observer(({ id, postImg, postTitle, postDescription, postViews }) => {
  const navigate = useNavigate();
  const { incrementViews } = PostsClass;
  function handlePost() {
    navigate(`post/${id}`);
    window.scrollTo({ top: 300 });
  }
  return (
    <div
      onClick={() => {
        handlePost();
      }}
      className="post">
      <div className="post-img">
        <img src={postImg} alt="" />
      </div>
      <h3 className="title-post">{postTitle}</h3>
      <h4 className="discription-post">{postDescription}</h4>
      {/* <div className="views">
        <img src={views} alt="" />
        <div className="views-number">{postViews}</div>
      </div> */}
    </div>
  );
});

export default Post;
