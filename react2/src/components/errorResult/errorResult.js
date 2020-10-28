import React, {useContext} from 'react';
import iconError from './iconError.svg';
import ContextApp from '../context';
import './errorResult.css';

const ErrorResult = () => {
 const {inputValue} = useContext(ContextApp);

  return (
    <div className="errorResult">
    <img src={iconError}/>
    <div className="errorMes">
      Sorry, there were no community results for "{inputValue}"
    </div>
  </div>
  );
}

export default ErrorResult;