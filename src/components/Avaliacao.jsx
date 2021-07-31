import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          id="avaliacao"
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ rating }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Avaliacao;
