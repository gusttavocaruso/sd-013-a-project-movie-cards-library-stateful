import React from 'react';
import PropTypes from 'prop-types';

class SendButton extends React.Component {
  render() {
    const { funcComp } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ funcComp }
      >
        Adicionar filme
      </button>
    );
  }
}

SendButton.propTypes = {
  funcComp: PropTypes.func.isRequired,
};

export default SendButton;
