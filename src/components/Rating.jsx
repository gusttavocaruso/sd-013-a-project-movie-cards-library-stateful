// implement Rating component here
import React from 'react';

import '../styles/Rating.css';

import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div data-testid="rating">
        <p>
          <strong>Rating:</strong>
          {' '}
          <span className="rating">{rating}</span>
        </p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 'undefined',
};

export default Rating;
