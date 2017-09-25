import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import MovieList from './../MovieList/MovieList';
import response from './../../../data/response.json';

export default class MovieListContainer extends React.Component {
  static sortListBy(list, criteria) {
    return _.reverse(_.sortBy(list, criteria));
  }

  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    // TODO: write an API request, wrap everything in a promise
    this.getMovies();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query || this.props.searchBy !== nextProps.searchBy) {
      this.getMovies();
    }
  }

  getMovies() {
    // TODO: write an API request, wrap everything in a promise
    // For now it just toggles empty array vs response to make sure the state is changed
    const movies = this.state.movies.length > 0 ? [] : response;
    this.setState({
      movies,
    });
    this.props.updateCount(movies.length);
  }

  render() {
    return (
      <MovieList
        movies={MovieListContainer.sortListBy(this.state.movies, this.props.sortBy)}
        movieSelectedId={this.props.movieSelectedId}
        selectMovie={this.props.selectMovie}
      />
    );
  }
}

MovieListContainer.propTypes = {
  query: PropTypes.string,
  searchBy: PropTypes.string,
  sortBy: PropTypes.string,
  movieSelectedId: PropTypes.number,
  selectMovie: PropTypes.func.isRequired,
  updateCount: PropTypes.func.isRequired,
};

MovieListContainer.defaultProps = {
  query: '',
  searchBy: 'title',
  sortBy: 'release_year',
  movieSelectedId: null,
};
