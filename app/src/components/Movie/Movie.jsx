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
    const {
      poster,
      show_title: showTitle,
      rating,
      category,
      release_year: releaseYear,
      runtime,
      summary,
      director,
      show_cast: showCast,
    } = this.props.item;
    return (
      <main className={styles.hero}>
        <img className={styles.poster} src={poster} alt={showTitle} />
        <section>
          <h2 className={styles.title}>{showTitle}</h2>
          <span className={styles.rate}>{rating}</span>
          <p>{category}</p>
          <p>
            <span className={styles.time}>{releaseYear}</span>
            <span className={styles.time}>{runtime}</span>
          </p>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.crew}>
            Director: {director}
          </p>
          <p className={styles.crew}>
            Cast: {showCast}
          </p>
        </section>
      </main>
    );
  }

  renderListed() {
    const { poster, show_title: showTitle, category, release_year: releaseYear } = this.props.item;
    return (
      <li className={styles.item}>
        <a className={styles.link} href="#placeholder-for-future-routing" onClick={this.selectThis}>
          <img className={styles.poster} src={poster} alt={showTitle} />
          <span className={styles.year}>{releaseYear}</span>

          <h3 className={styles.title}>{showTitle}</h3>
          <span className={styles.category}>{category}</span>
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
