import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          id="add-rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

AddRating.defaultProps = {
  value: '',
  handleChange: undefined,
};

export default AddRating;
