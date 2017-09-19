import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './../FilterItem/FilterItem';
import styles from './Search.scss';

function Search(props) {
  return (
    <div className={styles.search}>
      <h2>Find your movie</h2>
      <form name="search" method="get" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="query"
          defaultValue={props.query}
          placeholder="Ivan Vasilievich: Back to the Future"
          required
        />
        <input type="hidden" name="searchBy" defaultValue={props.searchBy} />
        <div className={styles.searchBy}>
          Search by
          {props.searchByArr.map(elem =>
            (<FilterItem
              key={elem}
              setFilter={props.setSearchBy}
              text={elem}
              value={elem}
              selected={elem === props.searchBy}
            />))}
        </div>
        <button type="submit" className={styles.submit}>Search</button>
      </form>
    </div>
  );
}

Search.propTypes = {
  searchByArr: PropTypes.arrayOf(PropTypes.string),
  query: PropTypes.string,
  searchBy: PropTypes.string,
  setSearchBy: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

Search.defaultProps = {
  searchByArr: ['title', 'director'],
  query: '',
  searchBy: '',
};

export default Search;
