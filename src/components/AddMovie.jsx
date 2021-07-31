import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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

  handleChange = ({ target }) => {
    const { name } = target;
    const valor = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: valor,
    });
  }

  createInput(prop, titleId, type, id) {
    return (
      <input
        name={ id }
        onChange={ this.handleChange }
        data-testid={ titleId }
        value={ prop }
        type={ type }
        id={ id }
      />
    );
  }

  createTextArea(prop, titleId, id) {
    return (
      <textarea
        name={ id }
        onChange={ this.handleChange }
        data-testid={ titleId }
        value={ prop }
        id={ id }
        maxLength={ 200 }
        placeholder="Digite a sinopse"
      />
    );
  }

  createSelect(prop, titleId, id) {
    return (
      <select
        name={ id }
        onChange={ this.handleChange }
        data-testid={ titleId }
        value={ prop }
        id={ id }
      >
        <option value="action" data-testid="genre-option">Ação:</option>
        <option value="comedy" data-testid="genre-option">Comédia:</option>
        <option value="thriller" data-testid="genre-option">Suspense:</option>
      </select>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {this.createInput(subtitle, 'subtitle-input', 'text', 'subtitle')}
        </label>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.createInput(title, 'title-input', 'text', 'title')}
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          {this.createInput(imagePath, 'image-input', 'text', 'imagePath')}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          {this.createTextArea(storyline, 'storyline-input', 'storyline')}
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          {this.createInput(rating, 'rating-input', 'number', 'rating')}
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          {this.createSelect(genre, 'genre-input', 'genre')}
        </label>

        <button
          type="button"
          onClick={ () => {
            onClick(this.state);
            this.setState({ subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action' });
          } }
          data-testid="send-button"
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}
/* AddMovie.defaultProps = {
  teste: 'teste',
}; */
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
