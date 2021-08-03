import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, arb } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ () => arb(onClick) }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  arb: PropTypes.func.isRequired,
};

export default Button;
