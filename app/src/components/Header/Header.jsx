import React from 'react';
import PropTypes from 'prop-types';
import Search from './../Search/Search';
import Movie from './../Movie/Movie';
import styles from './Header.scss';

function Header(props) {
  const content = (Object.keys(props.movieSelected).length > 0) ? (
    <div className={styles.content}>
      <h1 className={styles.title}>{props.title}</h1>
      <button className={styles.search} onClick={props.restoreSearch}>Search</button>
      <Movie item={props.movieSelected} selected />
    </div>
  ) : (
    <div className={styles.content}>
      <h1 className={styles.title}>{props.title}</h1>
      <Search
        handleSubmit={props.handleSubmit}
        query={props.query}
      />
    </div>
  );

  return (
    <header className={styles.header}>
      {content}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  movieSelected: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  query: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  restoreSearch: PropTypes.func.isRequired,
};

Header.defaultProps = {
  title: 'netflixroulette',
  movieSelected: {},
  query: '',
};

export default Header;
