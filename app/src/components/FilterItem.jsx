import React from 'react';
import PropTypes from 'prop-types';
import styles from './../styles/FilterItem.scss';

function FilterItem(props) {
  let className = styles.filter_item;
  if (props.selected) {
    className += ` ${styles.filter_item__selected}`;
  }
  return (
    <button type="button" onClick={props.setFilter} className={className}>
      {props.value}
    </button>);
}

FilterItem.propTypes = {
  setFilter: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.string,
};

FilterItem.defaultProps = {
  selected: false,
  value: '',
};

export default FilterItem;
