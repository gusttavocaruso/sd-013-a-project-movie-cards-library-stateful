// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleGeneric = this.handleGeneric.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleGeneric({ target }) {
    const { name } = target;
    const { value } = target;

    this.setState({ [name]: value });
  }

  handleClick() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleAddMovie" data-testid="title-input-label">
          Título
          <input type="text" name="title" onChange={ this.handleGeneric } id="titleAddMovie" data-testid="title-input" value={ title } />
        </label>
        <label htmlFor="subtitleAddMovie" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" name="subtitle" onChange={ this.handleGeneric } id="subtitleAddMovie" data-testid="subtitle-input" value={ subtitle } />
        </label>
        <label htmlFor="imageAddMovie" data-testid="image-input-label">
          Imagem
          <input type="text" name="imagePath" onChange={ this.handleGeneric } id="imageAddMovie" data-testid="image-input" value={ imagePath } />
        </label>
        <label htmlFor="storylineAddMovie" data-testid="storyline-input-label">
          Sinopse
          <textarea type="text" name="storyline" onChange={ this.handleGeneric } id="storylineAddMovie" data-testid="storyline-input" value={ storyline } />
        </label>
        <label htmlFor="ratingAddMovie" data-testid="rating-input-label">
          Avaliação
          <input type="number" name="rating" onChange={ this.handleGeneric } id="ratingAddMovie" data-testid="rating-input" value={ rating } />
        </label>
        <label htmlFor="genreAddMovie" data-testid="genre-input-label">
          Gênero
          <select value={ genre } name="genre" id="genreAddMovie" onChange={ this.handleGeneric } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={ this.handleClick } data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
