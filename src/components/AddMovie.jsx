import React from 'react';
import AddMovieForm from './AddMovieForm';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      handleChange: ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
      },
      handleSubmit: (e) => {
        console.log('clicou');
        e.preventDefault();
      },
    };
  }

  render() {
    const { title,
      subtitle,
      imagePath, handleChange, handleSubmit, rating, storyline, genre } = this.state;
    return (
      <form className="form" data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
        <AddMovieForm
          handleChange={ handleChange }
          handleSubmit={ handleSubmit }
          rating={ rating }
          storyline={ storyline }
          genre={ genre }
        />
      </form>
    );
  }
}
export default AddMovie;
