import React from 'react';

class ButtonSubmit extends React.Component {
  render() {
    return(
      <button type="submit" data-testid="send-button">Adicionar Filme</button>
    );
  }
}

export default ButtonSubmit;