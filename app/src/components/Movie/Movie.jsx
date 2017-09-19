import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.scss';

export default class Movie extends React.Component {
  constructor() {
    super();
    this.selectThis = this.selectThis.bind(this);
  }

  selectThis(e) {
    e.preventDefault();
    this.props.selectMovie(this.props.item);
  }

  renderSelected() {
    const item = this.props.item;
    return (
      <main className={styles.hero}>
        <img src={item.poster} alt={item.show_title} />
        <section>
          <h2>{item.show_title}</h2>
          <span className={styles.hero_rate}>{item.rating}</span>
          <p>{item.category}</p>
          <p>
            <span className={styles.hero_time}>{item.release_year}</span>
            <span className={styles.hero_time}>{item.runtime}</span>
          </p>
          <p className={styles.hero_summary}>{item.summary}</p>
          <p className={styles.hero_crew}>
            Director: {item.director}
          </p>
          <p className={styles.hero_crew}>
            Cast: {item.show_cast}
          </p>
        </section>
      </main>
    );
  }

  renderListed() {
    const item = this.props.item;
    return (
      <li className={styles.mlist__item}>
        <a href="#placeholder-for-future-routing" onClick={this.selectThis}>
          <img src={item.poster} alt={item.show_title} />
          <span className={styles.mlist__item_year}>{item.release_year}</span>

          <h3>{item.show_title}</h3>
          <span className={styles.mlist__item_category}>{item.category}</span>
        </a>
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
  selectMovie: PropTypes.func,
};


Movie.defaultProps = {
  item: {
    show_title: 'Unknown',
    poster: '',
    release_year: 'Unknown',
    category: 'Unknown',
  },
  selected: false,
  selectMovie() {},
};
