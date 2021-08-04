import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação:
        <input
          type="number"
          name="rating"
          value={ value }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Rating;
// Feito com a ajuda do Ygor Maia
