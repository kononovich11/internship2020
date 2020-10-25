import React from 'react';
import DefaultIcon from './defaultIcon.svg';
import {Consumer} from 'components/context';
import './community.css';

const Community = () => {
  return (
    <Consumer>
      {
        ({community}) => {
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
        }
      }
    </Consumer>
  );
};

export default Community;