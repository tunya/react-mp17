/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.render((
  <Router>
    <div>
      <Switch>
        <Route path="/film/:title" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </Router>
), document.getElementById('container'));

