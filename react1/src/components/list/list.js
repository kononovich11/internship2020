import React from 'react';
import {Consumer} from '../context';
import PostItem from '../postItem';
import SubredditItem from '../subredditItem';
import ErrorResult from '../errorResult';
import './list.css';

const List = () => {
  return (
    <Consumer>
      {
        ({posts, subreddits}) => {
          const renderArr = subreddits || posts;
          if (renderArr.length === 0) return <ErrorResult/>
          return (
            <div className="list">
              {
                renderArr.map(item => {
                  if (renderArr === subreddits) return <SubredditItem itemData={item.data}/>
                  return <PostItem itemData={item.data}/>
                })
              }
            </div>
          );
        }
      }
    </Consumer>
  );
}

export default List;