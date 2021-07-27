// implement Rating component here
import React from 'react';

import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p>
        <strong>Rating:</strong>
        {' '}
        <span className="rating">{rating}</span>
      </p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
