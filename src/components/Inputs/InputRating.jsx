import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const {
      onChange,
      rating,
    } = this.props;
    return (
      <label htmlFor="#" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          onChange={ onChange }
          value={ rating }
          name="rating"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  onChange: PropTypes.func,
  rating: PropTypes.number,
}.isRequired;

export default InputRating;
