import React from 'react';
import ReactDOM from 'react-dom';
import './magical/styles/tailwind.css';
import Routes from './magical-fe/Routes.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
