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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="add-title" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              id="add-title"
              name="title"
              type="text"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="add-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              id="add-subtitle"
              name="subtitle"
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="add-image" data-testid="image-input-label">
            Imagem
            <input
              data-testid="image-input"
              id="add-image"
              name="imagePath"
              type="text"
              value={ imagePath }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}
export default AddMovie;
