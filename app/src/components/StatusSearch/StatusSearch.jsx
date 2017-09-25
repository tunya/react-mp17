import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './../FilterItem/FilterItem';
import styles from './StatusSearch.scss';

function StatusSearch(props) {
  return (
    <div>
      {props.count} movies found
      <span className={styles.sortBy}>
        Sort by
        {props.sortByArr.map(elem => (
          <FilterItem
            key={elem.val}
            setFilter={props.applySort}
            text={elem.name}
            value={elem.val}
            selected={props.sortBy === elem.val}
          />
        ))}
      </span>
    </div>
  );
}


StatusSearch.propTypes = {
  applySort: PropTypes.func.isRequired,
  count: PropTypes.number,
  sortBy: PropTypes.string,
  sortByArr: PropTypes.arrayOf(PropTypes.object),
};

StatusSearch.defaultProps = {
  count: 0,
  sortBy: '',
  sortByArr: [],
};

export default StatusSearch;
