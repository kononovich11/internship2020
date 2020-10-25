import React from 'react';
import './header.css';
import Logo from './logo.svg';
import {Consumer} from '../context';

const Header = () => {

  return (
    <Consumer>
      {
        ({fetchSubreddits}) => {
          const changeInput = (e) => {
            fetchSubreddits(e.target.value);
          }

          return (
            <div className="header">
            <div className="panelSearch">
            <img className="logo" src={Logo}/>
              <input className="inputSearch"
                    placeholder="Search"
                    onChange={changeInput}/>
            </div>
            <div className="rectancle"/>
          </div>
          )
        }
      }
    </Consumer>
  );
};

export default Header;