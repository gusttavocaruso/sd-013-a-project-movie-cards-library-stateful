import React from 'react';

class Imagem extends React.Component {
  constructor() {
    super();
    this.state = {
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  render() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ imagePath }
          // onChange={ handleChange }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Imagem;
