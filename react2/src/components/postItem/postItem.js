import React from 'react';
import './postItem.css';
import CommentIcon from './icons8-comments.svg';

const PostItem = ({itemData}) => {
  const {author, title, selftext, num_comments, index} = itemData;
  return (
    <div className="postItem" key={index}>
      <div className="authorPost">
        Posted by {author}
      </div>
      <div className="titlePost">
        {title}
      </div>
      <div className="contentPost">
        {selftext}
      </div>
      <div className="comments">
        <img src={CommentIcon}/>
        {num_comments} comments
      </div>
    </div>
  );
}

export default PostItem;