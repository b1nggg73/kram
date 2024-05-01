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
      <h4 className="discription-post">
        Описание блога Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere quaerat
        aspernatur voluptatem? At, sapiente perspiciatis omnis porro sunt expedita culpa! Odio qui
        magni numquam vitae, in adipisci dolorum quae!
      </h4>
    </div>
  );
};

export default Post;
