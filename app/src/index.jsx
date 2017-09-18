/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import styles from './styles/index.scss';

const app = (
  <section className={styles.app_wrap}>
    <Header />
    <MovieList />
    <Footer />
  </section>
);

ReactDOM.render(app, document.getElementById('container'));

