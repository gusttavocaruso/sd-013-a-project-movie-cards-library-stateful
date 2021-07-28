import React from 'react';
// import PropTypes from 'prop-types';
import MovieStoryLine from './addcomponents/AddMovieStoryLine';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange =({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    const { handleChange } = this;
    return (
      <forms data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título:
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo:
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>

        <label data-testid="image-input-label" htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>

        <MovieStoryLine value={ storyline } onChange={ handleChange } />

      </forms>
    );
  }
}

export default AddMovie;
