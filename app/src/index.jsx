/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/search/:query" component={App} />
      <Route path="/film/:title" component={App} />
      <Route path="*" component={App} />
    </Switch>
  </Router>
), document.getElementById('container'));

