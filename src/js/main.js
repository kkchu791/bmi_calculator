import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

ReactDOM.render(
  <div>
    <App />
  </div>
  ,document.getElementById('main'));

