import React from 'react';
import './Post.css';
import postImg from '../../images/Post/post-img.png';

const Post = () => {
  return (
    <div className="post">
      <div className="post-img">
        <img src={postImg} alt="" />
      </div>
      <h3 className="title-post">Название блога</h3>
      <h4 className="discription-post">Описание блога</h4>
    </div>
  );
};

export default Post;
