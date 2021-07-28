// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title"
            data-testid="title-input"
            title={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="title" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            data-testid="subtitle-input"
            subtitle={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="title" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image"
            data-testid="image-input"
            imagePath={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
