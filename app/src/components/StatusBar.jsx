import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem';
import styles from './../styles/StatusBar.scss';

function StatusBar(props) {
  const applySort = props.applySort;
  return (
    <div className={styles.statusBar}>
      {props.count} movies found
      <span className={styles.sortBy}>
        Sort by
        {props.sortByArr.map(elem => (
          <FilterItem
            key={elem.val}
            setFilter={function sort() { applySort(elem.val); }}
            value={elem.name}
            selected={props.sortBy === elem.val}
          />
        ))}
      </span>
    </div>
  );
}


StatusBar.propTypes = {
  applySort: PropTypes.func.isRequired,
  count: PropTypes.number,
  sortBy: PropTypes.string,
  sortByArr: PropTypes.arrayOf(PropTypes.object),
};

StatusBar.defaultProps = {
  count: 0,
  sortBy: '',
  sortByArr: [],
};

export default StatusBar;
