/* global window */
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import styles from './MovieSelected.scss';

import response from './../../../data/response.json';

export default class MovieSelected extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
    };
  }

  componentDidMount() {
    const title = decodeURIComponent(this.props.match.params.title).toLowerCase();
    this.showMovie(title);
  }

  componentWillReceiveProps(nextProps) {
    const title = decodeURIComponent(nextProps.match.params.title).toLowerCase();
    this.showMovie(title);
  }

  showMovie(title) {
    let item;
    window.scrollTo(0, 0);
    response.forEach((el) => {
      if (el.show_title.toLowerCase() === title) {
        item = el;
      }
    });
    this.setState({ item });
  }

  render() {
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
    } = this.state.item;
    return (
      <main className={styles.hero}>
        <img className={styles.poster} src={poster} alt={showTitle} />
        <section>
          <h1 className={styles.title}>{showTitle}</h1>
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
}

MovieSelected.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
