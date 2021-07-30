import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
};
Avaliacao.defaultProps = {
  value: 0,
  handleChange: 'function',
};

export default Avaliacao;
