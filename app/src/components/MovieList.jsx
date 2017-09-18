import React from 'react';
import _ from 'lodash';
import StatusBar from './StatusBar';
import Movie from './Movie';
import styles from './../styles/MovieList.scss';
import Response from '../../data/response.json';

export default class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: Response,
      selected: null,
      order: '',
    };
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(criteria) {
    this.setState({
      movies: _.reverse(_.sortBy(this.state.movies, [criteria])),
      order: criteria,
    });
  }

  render() {
    const sortByArr = [{
      name: 'release date',
      val: 'release_year',
    }, {
      name: 'rating',
      val: 'rating',
    }];
    return (
      <section className="mlist_wrap">
        <StatusBar
          count={this.state.movies.length}
          sortByArr={sortByArr}
          applySort={this.sortBy}
          sortBy={this.state.order}
        />
        <ul className={styles.mlist}>
          {this.state.movies.map(elem => <Movie key={elem.show_id} item={elem} />)}
        </ul>
      </section>
    );
  }
}
