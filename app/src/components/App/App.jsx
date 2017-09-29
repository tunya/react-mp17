import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import Header from './../Header/Header';
import Search from './../Search/Search';
import MovieSelected from './../MovieSelected/MovieSelected';
import MovieListContainer from './../MovieListContainer/MovieListContainer';
import NotFound from './../NotFound/NotFound';
import Footer from './../Footer/Footer';

import styles from './App.scss';

export default class App extends React.Component {
  constructor() {
    super();
    this.title = 'netflixroulette';
  }

  render() {
    return (
      <section className={styles.app_wrap}>
        <Header title={this.title} showButton={!!this.props.match.params.title}>
          <Switch>
            <Route path="/search/:query" component={Search} />
            <Route path="/film/:title" component={MovieSelected} />
            <Route path="/" component={Search} />
          </Switch>
        </Header>
        <Switch>
          <Route path="/search/:query" component={MovieListContainer} />
          <Route path="/film/:title" component={MovieListContainer} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </section>
    );
  }
}

App.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
