import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        onClick={ onClick }
        data-testid="send-button"
        type="button"
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
