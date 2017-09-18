import React from 'react';
import PropTypes from 'prop-types';
import styles from './../styles/Movie.scss';

export default class Movie extends React.Component {
  renderSelected() {
    return (
      <div>{this.props.item.show_title}</div>
    );
  }

  renderListed() {
    return (
      <li className={styles.mlist__item}>
        <img src={this.props.item.poster} alt={this.props.item.show_title} />
        <span className={styles.mlist__item_year}>{this.props.item.release_year}</span>

        <h3>{this.props.item.show_title}</h3>
        <span className={styles.mlist__item_category}>{this.props.item.category}</span>
      </li>
    );
  }

  render() {
    let result = null;
    if (Object.keys(this.props.item).length !== 0) {
      if (this.props.selected) {
        result = this.renderSelected();
      } else {
        result = this.renderListed();
      }
    }
    return result;
  }
}

Movie.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  selected: PropTypes.bool,
};


Movie.defaultProps = {
  item: {
    show_title: 'Unknown',
    poster: '',
    release_year: 'Unknown',
    category: 'Unknown',
  },
  selected: false,
};
