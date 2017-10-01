import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import FilterItem from './../FilterItem/FilterItem';

import styles from './Search.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'title',
    };

    this.setSearchBy = this.setSearchBy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setSearchBy({ target: { value } }) {
    this.setState({
      searchBy: value,
    });
  }

  handleSubmit(e) {
    const { target: { query: { value: query } } } = e;
    e.preventDefault();
    this.props.history.push(`/search/${encodeURIComponent(query.toLowerCase())}`);
  }

  render() {
    return (
      <div className={styles.search}>
        <h1 className={styles.title}>Find your movie</h1>

        <form name="search" method="get" onSubmit={this.handleSubmit}>
          <input
            className={styles.query}
            type="text"
            name="query"
            defaultValue={this.props.match.params.query}
            placeholder="Ivan Vasilievich: Back to the Future"
            required
          />
          <input type="hidden" name="searchBy" defaultValue={this.state.searchBy} />

          <div className={styles.searchBy}>
            Search by
            {this.props.searchByArr.map(elem => (
              <FilterItem
                key={elem}
                setFilter={this.setSearchBy}
                text={elem}
                value={elem}
                selected={elem === this.state.searchBy}
              />
            ))}
          </div>
          <button type="submit" className={styles.submit}>Search</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchByArr: PropTypes.arrayOf(PropTypes.string),
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

Search.defaultProps = {
  searchByArr: ['title', 'director'],
};

export default withRouter(Search);
