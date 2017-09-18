import React from 'react';
import PropTypes from 'prop-types';
import styles from './../styles/Footer.scss';

function Footer(props) {
  return (
    <footer className={styles.footer}>{props.text}</footer>
  );
}

Footer.propTypes = {
  text: PropTypes.string,
};

Footer.defaultProps = {
  text: 'netflixroulette',
};

export default Footer;
