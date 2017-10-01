import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Movie.scss';

function Movie(props) {
  const { poster, show_title: showTitle, category, release_year: releaseYear } = props.item;
  return (
    <li className={styles.item}>
      <Link to={`/film/${encodeURIComponent(showTitle.toLowerCase())}`} className={styles.link}>
        <img className={styles.poster} src={poster} alt={showTitle} />
        <span className={styles.year}>{releaseYear}</span>

        <h3 className={styles.title}>{showTitle}</h3>
        <span className={styles.category}>{category}</span>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};


Movie.defaultProps = {
  item: {
    show_title: 'Unknown',
    poster: '',
    release_year: 'Unknown',
    category: 'Unknown',
  },
};

export default Movie;
