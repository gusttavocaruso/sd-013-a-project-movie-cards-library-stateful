import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title, subtitle, imagePath, /* storyLine, rating, genre, */
    } = this.state;

    return (
      <form action="" data-testid="add-movie-form">

        <label htmlFor="title-input" data-testid="title-input-label">
          Título:
          <input
            data-testid="title-input"
            type="text"
            name={ title }
            value={ this.title }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            data-testid="subtitle-input"
            type="text"
            name={ subtitle }
            value={ this.subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name={ imagePath }
            value={ this.imagePath }
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
