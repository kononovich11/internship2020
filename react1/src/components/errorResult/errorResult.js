import React from 'react';
import iconError from './iconError.svg';
import {Consumer} from '../context';
import './errorResult.css';

const ErrorResult = () => {
  return (
    <Consumer>
      {
        ({inputValue}) => {
          return (
            <div className="errorResult">
            <img src={iconError}/>
            <div className="errorMes">
              Sorry, there were no community results for "{inputValue}"
            </div>
          </div>
          );
        }
      }
    </Consumer>
  );
}

export default ErrorResult;