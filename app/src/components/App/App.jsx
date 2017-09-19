import React from 'react';
import _ from 'lodash';
import Header from './../Header/Header';
import StatusBar from '../StatusBar/StatusBar';
import MovieList from './../MovieList/MovieList';
import Footer from './../Footer/Footer';
import styles from './App.scss';
import response from '../../../data/response.json';

export default class App extends React.Component {
  static sortListBy(list, criteria) {
    return _.reverse(_.sortBy(list, criteria));
  }

  constructor() {
    super();
    this.state = {
      movies: response,
      movieSelected: {},
      movieSelectedId: null,
      sortOrder: 'release_year',
      query: '',
      searchBy: 'title',
    };

    this.title = 'netflixroulette';

    // Bind context to the callbacks
    this.setSearchBy = this.setSearchBy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
    this.restoreSearch = this.restoreSearch.bind(this);
  }

  setSearchBy(e) {
    this.setState({
      searchBy: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let movies = []; // this will be replaced with the result of API call
    // TODO: write an API request, put the following in a callback
    if (movies.length > 0) {
      movies = App.sortListBy(movies, this.state.sortOrder);
    }
    this.setState({
      query: e.target.query.value,
      movies,
    });
    return false;
  }

  handleSortBy({ target: { value } }) {
    const list = App.sortListBy(this.state.movies, value);
    this.setState({
      movies: list,
      sortOrder: value,
    });
  }

  selectMovie(item) {
    let movies = [];
    // TODO: write an API request to fetch movies by director, put the following in a callback
    movies = response; // this will be replaced with the result of API call
    movies = App.sortListBy(movies, this.state.sortOrder);
    this.setState({
      movieSelected: item,
      movieSelectedId: item.show_id,
      movies,
    });
  }

  restoreSearch() {
    let movies = [];
    // TODO: write an API request to fetch movies by search query, put the following in a callback
    movies = response; // this will be replaced with the result of API call
    movies = App.sortListBy(movies, this.state.sortOrder);
    this.setState({
      movieSelected: {},
      movieSelectedId: null,
      movies,
    });
  }

  render() {
    return (
      <section className={styles.app_wrap}>
        <Header
          title={this.title}
          movieSelected={this.state.movieSelected}
          query={this.state.query}
          searchBy={this.state.searchBy}
          setSearchBy={this.setSearchBy}
          handleSubmit={this.handleSubmit}
          restoreSearch={this.restoreSearch}
        />
        <StatusBar
          count={this.state.movies.length}
          applySort={this.handleSortBy}
          sortBy={this.state.sortOrder}
          movieSelected={this.state.movieSelected}
        />
        <MovieList
          movies={this.state.movies}
          movieSelectedId={this.state.movieSelectedId}
          selectMovie={this.selectMovie}
        />
        <Footer />
      </section>
    );
  }
}
