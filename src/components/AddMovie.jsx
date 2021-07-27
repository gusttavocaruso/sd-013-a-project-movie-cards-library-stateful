import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { state, handleChange } = this;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            value={ state.title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="sub" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="sub"
            value={ state.subtitle }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="img" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="img"
            value={ state.imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
      </form>

    );
  }
}

export default AddMovie;
