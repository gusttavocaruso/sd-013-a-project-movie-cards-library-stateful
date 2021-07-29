import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <div className="rating">
          <span className="rating">{rating}</span>
          <span className="fa fa-star checked" />
        </div>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };

Rating.defaultProps = {
  rating: 'undefined',
};

export default Rating;
