import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ value }
          name="rating"
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieRating;
