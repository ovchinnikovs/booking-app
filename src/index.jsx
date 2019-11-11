import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

const application = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(application, document.getElementById('root'));
