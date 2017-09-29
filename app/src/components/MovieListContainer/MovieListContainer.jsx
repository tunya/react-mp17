import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import MovieList from './../MovieList/MovieList';
import EmptyList from '../EmptyList/EmptyList';

import response from './../../../data/response.json';

export default class MovieListContainer extends React.Component {
  static sortListBy(list, criteria) {
    return _.reverse(_.sortBy(list, criteria));
  }

  constructor() {
    super();
    this.state = {
      movies: [],
      sortBy: 'release_year',
      movieSelected: {},
    };

    this.handleSortBy = this.handleSortBy.bind(this);
  }

  componentDidMount() {
    const { match: { params: { query, title } }, searchBy } = this.props;
    // TODO: write an API request, wrap everything in a promise
    this.getMovies(query, searchBy, decodeURIComponent(title));
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params: { query, title } }, searchBy } = this.props;
    const {
      match: { params: { query: nextQuery, title: nextTitle } },
      searchBy: nextSearchBy,
    } = nextProps;
    if (query !== nextQuery || searchBy !== nextSearchBy || title !== nextTitle) {
      this.getMovies(nextQuery, nextSearchBy, decodeURIComponent(nextTitle));
    }
  }

  getMovies(query, searchBy, title) {
    // TODO: write an API request, wrap everything in a promise
    const movies = (query && searchBy) === '' ? [] : response;
    let movieSelected = {};
    if (title) {
      const compareTitle = title.toLowerCase();
      movies.forEach((el) => {
        if (el.show_title.toLowerCase() === compareTitle) {
          movieSelected = el;
        }
      });
    }
    this.setState({
      movies,
      movieSelected,
    });
  }

  handleSortBy({ target: { value } }) {
    this.setState({
      sortBy: value,
    });
  }

  render() {
    return (
      this.state.movies.length ? (
        <MovieList
          movies={MovieListContainer.sortListBy(this.state.movies, this.state.sortBy)}
          movieSelected={this.state.movieSelected}
          sortBy={this.state.sortBy}
          handleSortBy={this.handleSortBy}
        />
      ) : (
        <EmptyList />
      )
    );
  }
}

MovieListContainer.propTypes = {
  searchBy: PropTypes.string,
  match: ReactRouterPropTypes.match.isRequired,
};

MovieListContainer.defaultProps = {
  searchBy: 'title',
};
