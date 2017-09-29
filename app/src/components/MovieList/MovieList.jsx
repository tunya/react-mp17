import React from 'react';
import PropTypes from 'prop-types';

import StatusBar from './../StatusBar/StatusBar';
import Movie from './../Movie/Movie';

import styles from './MovieList.scss';

function MovieList(props) {
  return (
    <div>
      <StatusBar
        movieSelected={props.movieSelected}
        count={props.movies.length}
        sortBy={props.sortBy}
        applySort={props.handleSortBy}
      />
      <ul className={styles.mlist}>
        {props.movies.map(elem => (
          (!props.movieSelected || elem.show_id !== props.movieSelected.show_id) ? (
            <Movie key={elem.show_id} item={elem} />
          ) : (
            null
          )
        ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  movieSelected: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  sortBy: PropTypes.string,
  handleSortBy: PropTypes.func,
};

MovieList.defaultProps = {
  movies: [],
  movieSelected: {},
  sortBy: 'release_year',
  handleSortBy: () => {},
};

export default MovieList;
