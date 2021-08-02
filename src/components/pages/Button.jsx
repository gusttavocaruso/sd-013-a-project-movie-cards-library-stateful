import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    // a função resetState não está funcionando!!!!
    const { onClick } = this.props;
    return (
      <button
        onClick={ onClick }
        type="button"
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
