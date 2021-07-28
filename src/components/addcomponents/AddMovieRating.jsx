import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação:
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieRating;
