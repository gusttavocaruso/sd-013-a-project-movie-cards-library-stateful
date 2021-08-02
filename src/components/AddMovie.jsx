import React from 'react';
import PropTypes from 'prop-types';
import ImageInput from './ImageInput';
import GenreInput from './GenreInput';
import StorylineInput from './StorylineInput';
import Button from './Button';

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

  onClick = () => { // Reseta os campos, para que fiquem todos limpos.
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    const inicial = this.state;
    onClick(inicial);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="titulo"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="subtitulo"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitulo"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            id="rating"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
        <GenreInput genre={ genre } handleChange={ this.handleChange } />
        <StorylineInput storyline={ storyline } handleChange={ this.handleChange } />
        <Button type="submit" onClick={ this.onClick } data-testid="send-button" />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

// Questões referentes a este arquivos feitas com ajuda de Pedro Trasfereti.
