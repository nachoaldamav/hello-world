import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelloWorldApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <HelloWorldApp />
  </BrowserRouter>
), document.getElementById('root'));

