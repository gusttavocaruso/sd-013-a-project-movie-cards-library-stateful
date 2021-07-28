import React from 'react';
import PropTypes from 'prop-types';

class RatingAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          id="Avaliacao"
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingAddMovie.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingAddMovie;
