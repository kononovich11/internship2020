import React from 'react';
import {Consumer} from '../context';
import PostItem from '../postItem';
import SubredditItem from '../subredditItem';
import './list.css';

const List = () => {
  return (
    <Consumer>
      {
        ({fetchData, subreddits}) => {
          const renderArr = subreddits || fetchData;
          if (renderArr.length === 0) return <div>No result</div>
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