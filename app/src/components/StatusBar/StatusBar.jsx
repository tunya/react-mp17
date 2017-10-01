import React from 'react';
import PropTypes from 'prop-types';

import StatusSearch from '../StatusSearch/StatusSearch';
import StatusMovie from '../StatusMovie/StatusMovie';

import styles from './StatusBar.scss';

function StatusBar(props) {
  let content = '';
  if (Object.keys(props.movieSelected).length > 0) {
    content = (
      <StatusMovie item={props.movieSelected} />
    );
  } else if (props.count > 0) {
    content = (
      <StatusSearch
        count={props.count}
        applySort={props.applySort}
        sortBy={props.sortBy}
        sortByArr={props.sortByArr}
      />
    );
  }
  return (
    <div className={styles.statusBar}>{content}</div>
  );
}


StatusBar.propTypes = {
  applySort: PropTypes.func,
  count: PropTypes.number,
  sortBy: PropTypes.string,
  sortByArr: PropTypes.arrayOf(PropTypes.object),
  movieSelected: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

StatusBar.defaultProps = {
  count: 0,
  sortBy: 'release_year',
  sortByArr: [{
    name: 'release date',
    val: 'release_year',
  }, {
    name: 'rating',
    val: 'rating',
  }],
  movieSelected: {},
  applySort: () => {},
};

export default StatusBar;
