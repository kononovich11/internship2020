import React, {useContext} from 'react';
import DefaultIcon from './defaultIcon.svg';
import ContextApp from 'components/context';
import './community.css';

const Community =  () => {
  const {community, inputValue} = useContext(ContextApp);

  if(inputValue) return <div>Search results for “{inputValue}”</div>

  return (
    <div className="community">
      <img src={DefaultIcon} alt="communityIcon"/>
      <div className = "content">
        <div className="title">
          {community.title}
        </div>
        <div className="prefixName">
          {community.display_name_prefixed}
        </div>
      </div>
    </div>     
  );
};

export default Community;