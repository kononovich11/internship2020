import React, {useContext} from 'react';
import './header.css';
import Logo from './logo.svg';
import ContextApp from '../context';

const Header = () => {
  const {setInputValue} = useContext(ContextApp);

  const changeInput = (e) => {
    setInputValue(e.target.value);
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
  );
};

export default Header;