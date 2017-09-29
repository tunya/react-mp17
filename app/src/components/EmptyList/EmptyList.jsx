import React from 'react';

import StatusBar from './../StatusBar/StatusBar';

import styles from './EmptyList.scss';

function NotFound() {
  return (
    <div>
      <StatusBar />
      <div className={styles.empty}>No films found</div>
    </div>
  );
}

export default NotFound;
