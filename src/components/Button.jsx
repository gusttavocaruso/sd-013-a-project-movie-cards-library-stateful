import React from 'react';

class Button extends React.Component {
  render() {
    const { handleChange, callBack } = this.props;
    return (
      <div>
        <button
          data-testid="send-button"
          type="button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default Button;
