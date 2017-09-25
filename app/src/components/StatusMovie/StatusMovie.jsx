import React from 'react';
import PropTypes from 'prop-types';

function StatusMovie(props) {
  return (
    <div>Films by {props.item.director}</div>
  );
}

StatusMovie.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

StatusMovie.defaultProps = {
  item: {
    director: 'Unknown',
  },
};

export default StatusMovie;
