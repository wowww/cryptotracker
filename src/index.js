import React from 'react';
import ReactDOM from 'react-dom';
import CryptoContext from './CryptoContext'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById('root')
);

