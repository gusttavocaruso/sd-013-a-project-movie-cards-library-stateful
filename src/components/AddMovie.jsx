// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Inspirada na sintaxe do componente MovieForm do projeto Movie Card Library CRUD
  updateState(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTextInput() {
    const { title } = this.state;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título:
        <input
          type="text"
          name="title-input"
          id="title-input"
          value={ title }
          onChange={ (event) => this.updateState('title', event.target.value) }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          type="text"
          name="subtitle-input"
          id="subtitle-input"
          value={ subtitle }
          onChange={ (event) => this.updateState('subtitle', event.target.value) }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          name="image-input"
          id="image-input"
          value={ imagePath }
          onChange={ (event) => this.updateState('imagePath', event.target.value) }
          data-testid="image-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTextInput()}
        {this.renderSubtitleInput()}
        {this.renderImageInput()}
      </form>
    );
  }
}

export default AddMovie;
