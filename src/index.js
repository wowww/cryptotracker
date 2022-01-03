import React from 'react';
import ReactDOM from 'react-dom';
import CryptoContext from './CryptoContext'
import './index.css';
import App from './App';
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById('root')
);

