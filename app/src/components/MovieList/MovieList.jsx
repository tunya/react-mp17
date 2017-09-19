import React from 'react';
import PropTypes from 'prop-types';
import Movie from './../Movie/Movie';
import styles from './MovieList.scss';

export default class MovieList extends React.Component {
  static renderEmpty() {
    return (
      <div className={styles.empty}>No films found</div>
    );
  }

  renderList() {
    return (
      <ul className={styles.mlist}>
        {this.props.movies.map((elem) => {
          let result = null;
          if (elem.show_id !== this.props.movieSelectedId) {
            result = <Movie key={elem.show_id} item={elem} selectMovie={this.props.selectMovie} />;
          }
          return result;
        })}
      </ul>
    );
  }

  render() {
    let result;
    if (this.props.movies.length > 0) {
      result = this.renderList();
    } else {
      result = MovieList.renderEmpty();
    }
    return result;
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  movieSelectedId: PropTypes.number,
  selectMovie: PropTypes.func.isRequired,
};

MovieList.defaultProps = {
  movies: [],
  movieSelectedId: null,
};
