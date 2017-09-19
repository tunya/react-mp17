import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterItem.scss';

function FilterItem(props) {
  const className = `${styles.filter_item} ${props.selected ? styles.filter_item__selected : ''}`;
  return (
    <button type="button" onClick={props.setFilter} className={className} value={props.value}>
      {props.text}
    </button>);
}

FilterItem.propTypes = {
  setFilter: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.string,
  text: PropTypes.string,
};

FilterItem.defaultProps = {
  selected: false,
  value: '',
  text: '',
};

export default FilterItem;
