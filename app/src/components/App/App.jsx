import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from './../Header/Header';
import StatusBar from '../StatusBar/StatusBar';
import MovieListContainer from './../MovieListContainer/MovieListContainer';
import Footer from './../Footer/Footer';
import styles from './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
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

  componentWillMount() {
    const query = this.props.match.params.query || this.props.match.params.title;
    this.setQuery(query);
  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.match.params.query || nextProps.match.params.title;
    this.setQuery(query);
    if (!nextProps.match.params.title) {
      this.setState({
        movieSelected: {},
        movieSelectedId: null,
      });
    }
  }

  setQuery(query) {
    const newQuery = query ? decodeURIComponent(query) : '';
    this.setState({
      query: newQuery,
    });
  }

  handleSubmit(e) {
    const { target: { query: { value: query } }, target: { searchBy: { value: searchBy } } } = e;
    e.preventDefault();
    this.setState({
      query,
      searchBy,
    });
    this.props.history.push(`/search/${encodeURIComponent(query.toLowerCase())}`);
  }

  handleSortBy({ target: { value } }) {
    this.setState({
      sortBy: value,
    });
  }

  selectMovie(item) {
    const { show_id: showId, director } = item;
    this.setState({
      movieSelected: item,
      movieSelectedId: showId,
      query: director,
      searchBy: 'director',
    });
  }

  restoreSearch() {
    this.setState({
      movieSelected: {},
      movieSelectedId: null,
      query: '',
    });
    this.props.history.push('/');
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
          title={this.props.match.path === '/film/:title' ? decodeURIComponent(this.props.match.params.title) : null}
        />
        <Footer />
      </section>
    );
  }
}

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(App);
