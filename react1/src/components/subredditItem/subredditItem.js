import React from 'react';
import './subredditItem.css';
import {Consumer} from '../context'; 

const SubredditItem = ({itemData}) => {
  const {display_name_prefixed, subscribers, public_description, header_img} = itemData;

  return (
    <Consumer>
      {
        ({setPostUrl}) => {
          const subredditHandler = (e) => {
           const redirectPost = e.target.children[1].children[0].innerText;
           setPostUrl(redirectPost);
          }

          return(
            <div className="subreddit" onClick={subredditHandler}>
            <img src={header_img} alt="subreddit" className="subredditImg"/>
            <div className="subredditContent">
              <div className="subredditTitle">
                {display_name_prefixed}
              </div>
              <div className="subscribers">
                {subscribers} Members
              </div>
            </div>
              <div className="publicDescription">
                {public_description}
              </div>
          </div>
          );
        }
      }
    </Consumer>
  );
};

export default SubredditItem;