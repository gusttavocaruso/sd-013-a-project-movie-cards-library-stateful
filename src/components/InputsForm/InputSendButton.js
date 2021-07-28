import React, { Component } from 'react';

class InputSendButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default InputSendButton;
