import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchButton.scss';

function SearchButton() {
  return (
    <Link to="/" className={styles.search}>Search</Link>
  );
}

export default SearchButton;
