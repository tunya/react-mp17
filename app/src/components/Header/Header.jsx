import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Header.scss';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/" className={styles.title}>{props.title}</Link>
        {props.children}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Header.defaultProps = {
  title: 'netflixroulette',
  showButton: false,
};

export default Header;
