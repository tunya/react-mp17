import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem';
import styles from './../styles/Search.scss';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: 'Quentin Tarantino',
      searchBy: 'director',
    };
    this.setSearchBy = this.setSearchBy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setSearchBy(e) {
    this.setState({
      searchBy: e.target.innerHTML,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: write an API request
    this.setState({
      query: e.target.query.value,
    });
    return false;
  }

  render() {
    return (
      <div className={styles.search}>
        <h2>Find your movie</h2>
        <form name="search" method="get" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            defaultValue={this.state.query}
            placeholder="Ivan Vasilievich: Back to the Future"
          />
          <input type="hidden" name="searchBy" defaultValue={this.state.searchBy} />
          <div className={styles.searchBy}>
            Search by
            {this.props.searchByArr.map(elem =>
              (<FilterItem
                key={elem}
                setFilter={this.setSearchBy}
                value={elem}
                selected={elem === this.state.searchBy}
              />))}
          </div>
          <button type="submit" className={styles.submit}>Search</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchByArr: PropTypes.arrayOf(PropTypes.string),
};

Search.defaultProps = {
  searchByArr: [],
};
