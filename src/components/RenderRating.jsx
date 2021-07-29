import React from 'react';
import PropTypes from 'prop-types';

class RenderRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="ratingInput">
        Avaliação:
        <input
          type="number"
          name="rating"
          id="ratingInput"
          value={ value }
          onChange={ onChange }
          min="0"
          max="5"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RenderRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RenderRating;
