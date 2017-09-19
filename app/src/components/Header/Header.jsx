import React from 'react';
import PropTypes from 'prop-types';
import Search from './../Search/Search';
import Movie from './../Movie/Movie';
import styles from './Header.scss';

function Header(props) {
  let content = '';
  if (Object.keys(props.movieSelected).length > 0) {
    content = (
      <div className={styles.header_content}>
        <h1>{props.title}</h1>
        <button className={styles.to_search} onClick={props.restoreSearch}>Search</button>
        <Movie item={props.movieSelected} selected />
      </div>
    );
  } else {
    content = (
      <div className={styles.header_content}>
        <h1>{props.title}</h1>
        <Search
          searchByArr={props.searchByArr}
          handleSubmit={props.handleSubmit}
          query={props.query}
          searchBy={props.searchBy}
          setSearchBy={props.setSearchBy}
        />
      </div>
    );
  }
  return (
    <header className={styles.header}>
      {content}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchByArr: PropTypes.arrayOf(PropTypes.string),
  movieSelected: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  query: PropTypes.string,
  searchBy: PropTypes.string,
  setSearchBy: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  restoreSearch: PropTypes.func.isRequired,
};

Header.defaultProps = {
  title: 'netflixroulette',
  searchByArr: ['title', 'director'],
  movieSelected: {},
  query: '',
  searchBy: '',
};

export default Header;
