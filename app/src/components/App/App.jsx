import React from 'react';
import Header from './../Header/Header';
import StatusBar from '../StatusBar/StatusBar';
import MovieListContainer from './../MovieListContainer/MovieListContainer';
import Footer from './../Footer/Footer';
import styles from './App.scss';
import response from '../../../data/response.json';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: response,
      movieSelected: {},
      movieSelectedId: null,
      sortBy: 'release_year',
      query: '',
      searchBy: 'title',
    };

    this.title = 'netflixroulette';

    // Bind context to the callbacks
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
    this.restoreSearch = this.restoreSearch.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  handleSubmit(e) {
    const { target: { query: { value: query } }, target: { searchBy: { value: searchBy } } } = e;
    e.preventDefault();
    this.setState({
      query,
      searchBy,
    });
    return false;
  }

  handleSortBy({ target: { value } }) {
    this.setState({
      sortBy: value,
    });
  }

  selectMovie(item) {
    this.setState({
      movieSelected: item,
      movieSelectedId: item.show_id,
    });
  }

  restoreSearch() {
    this.setState({
      movieSelected: {},
      movieSelectedId: null,
    });
  }

  updateCount(count) {
    this.setState({
      count,
    });
  }

  render() {
    return (
      <section className={styles.app_wrap}>
        <Header
          title={this.title}
          movieSelected={this.state.movieSelected}
          query={this.state.query}
          handleSubmit={this.handleSubmit}
          restoreSearch={this.restoreSearch}
        />
        <StatusBar
          count={this.state.count}
          applySort={this.handleSortBy}
          sortBy={this.state.sortBy}
          movieSelected={this.state.movieSelected}
        />
        <MovieListContainer
          query={this.state.query}
          searchBy={this.state.searchBy}
          sortBy={this.state.sortBy}
          movieSelectedId={this.state.movieSelectedId}
          selectMovie={this.selectMovie}
          updateCount={this.updateCount}
        />
        <Footer />
      </section>
    );
  }
}
