import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <AppRouter />, 
  document.getElementById('root')
);
registerServiceWorker();
