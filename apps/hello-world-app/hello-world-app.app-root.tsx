import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './app';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HelloWorldApp />
  </React.StrictMode>
);


