import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './../FilterItem/FilterItem';
import styles from './Search.scss';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'title',
    };

    this.setSearchBy = this.setSearchBy.bind(this);
  }

  setSearchBy({ target: { value } }) {
    this.setState({
      searchBy: value,
    });
  }

  render() {
    return (
      <div className={styles.search}>
        <h2 className={styles.title}>Find your movie</h2>

        <form name="search" method="get" onSubmit={this.props.handleSubmit}>
          <input
            className={styles.query}
            type="text"
            name="query"
            defaultValue={this.props.query}
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
  query: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

Search.defaultProps = {
  searchByArr: ['title', 'director'],
  query: '',
};
