import React from 'react';
import PropTypes from 'prop-types';
import MovieStoryLine from './addcomponents/AddMovieStoryLine';
import MovieRating from './addcomponents/AddMovieRating';
import MovieGenre from './addcomponents/AddMovieGenre';

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

  handleChange =({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleClick } = this;
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
        <MovieRating value={ rating } onChange={ handleChange } />
        <MovieGenre value={ genre } onChange={ handleChange } />
        <button data-testid="send-button" type="button" onClick={ handleClick }>
          Adicionar filme
        </button>
      </forms>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
