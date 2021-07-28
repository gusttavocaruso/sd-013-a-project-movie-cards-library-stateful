import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="avaliacao"
          id="avaliacao"
          data-testid="rating-input"
          value={ rating }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Avaliacao;
