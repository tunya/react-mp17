/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('container'));

