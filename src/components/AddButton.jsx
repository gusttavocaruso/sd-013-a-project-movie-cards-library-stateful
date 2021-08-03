import React from 'react';

class AddButton extends React.Component {
  render() {
    return (
      <button type="submit" data-testid="send-button" onClick={ onclick }>
        Adicionar filme
      </button>
    );
  }
}

export default AddButton;
