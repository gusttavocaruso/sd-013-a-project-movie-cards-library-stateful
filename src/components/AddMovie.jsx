import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="new-movie" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              id="new-movie"
              data-testid="title-input"
              onChange={ this.handleChange }
              value={ title }
            />
          </label>
          <label htmlFor="new-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              id="new-subtitle"
              data-testid="subtitle-input"
              onChange={ this.handleChange }
              value={ subtitle }
            />
          </label>
          <label htmlFor="new-img" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              id="new-img"
              data-testid="image-input"
              onChange={ this.handleChange }
              value={ imagePath }
            />
          </label>
          <label htmlFor="text-area" data-testid="storyline-input-label">
            Sinopse
            <input
              type="textarea"
              name="storyline"
              id="text-area"
              data-testid="storyline-input"
              onChange={ this.handleChange }
              value={ storyline }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
