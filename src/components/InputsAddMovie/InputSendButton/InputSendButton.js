import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSendButton extends Component {
  render() {
    const { click } = this.props;
    return (
      <div>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ click }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

InputSendButton.propTypes = {
  click: PropTypes.func.isRequired,
};

export default InputSendButton;
