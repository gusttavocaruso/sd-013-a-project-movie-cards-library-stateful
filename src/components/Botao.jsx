import React from 'react';
import PropTypes from 'prop-types';

class Botao extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button data-testid="send-button" type="button" onClick={ onClick }>
        Adicionar filme
      </button>
    );
  }
}
Botao.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;
export default Botao;
