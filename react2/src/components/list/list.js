import React, {useContext} from 'react';
import ContextApp from '../context';
import PostItem from '../postItem';
import SubredditItem from '../subredditItem';
import ErrorResult from '../errorResult';
import './list.css';

const List = () => {
  const {posts, subreddits} = useContext(ContextApp);
  const renderArr = subreddits || posts;

  if (renderArr.length === 0) return <ErrorResult/>

  return (     
    <div className="list">
      {
        renderArr.map((item, index)=> {
          if (renderArr === subreddits) return <SubredditItem itemData={item.data} key={index}/>
          return <PostItem itemData={item.data} key={index}/>
        })
      }
    </div>
  );
}

export default List;
