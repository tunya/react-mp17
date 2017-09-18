import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Movie from './Movie';
import styles from './../styles/Header.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header_content}>
          <h1>{this.props.title}</h1>
          {Object.keys(this.state) > 0 ? (
            <Movie item={this.state} selected />
          ) : (
            <Search searchByArr={['title', 'director']} />
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'netflixroulette',
};
