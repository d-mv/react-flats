import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './app'
import flatsData from './data/flats'

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
  <App flats={flatsData} />, root
  );
}
