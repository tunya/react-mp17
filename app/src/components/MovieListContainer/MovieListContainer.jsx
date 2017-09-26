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
    this.getMovies(this.props.query, this.props.searchBy, this.props.title);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query
      || this.props.searchBy !== nextProps.searchBy
      || this.props.title !== nextProps.title) {
      this.getMovies(nextProps.query, nextProps.searchBy, nextProps.title);
    }
  }

  getMovies(query, searchBy, title) {
    // TODO: write an API request, wrap everything in a promise
    const movies = (query && searchBy) === '' ? [] : response;
    let selected;
    if (title) {
      const compareTitle = title.toLowerCase();
      movies.forEach((el) => {
        if (el.show_title.toLowerCase() === compareTitle) {
          selected = el;
        }
      });
    }
    this.setState({
      movies,
    });
    this.props.updateCount(movies.length);
    if (typeof selected === 'object') {
      this.props.selectMovie(selected);
    }
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
  title: PropTypes.string,
  selectMovie: PropTypes.func.isRequired,
  updateCount: PropTypes.func.isRequired,
};

MovieListContainer.defaultProps = {
  query: '',
  searchBy: 'title',
  sortBy: 'release_year',
  movieSelectedId: null,
  title: null,
};
