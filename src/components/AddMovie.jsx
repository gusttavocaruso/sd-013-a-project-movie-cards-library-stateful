// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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

      // função para atualizar state
      handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
          [name]: value,
        });
      }

      aInput(type, name, data, value) {
        return (
          <input
            type={ type }
            name={ name }
            data-testid={ data }
            value={ value }
            onChange={ this.handleChange }
          />
        );
      }

      aTextArea(data, value, name) {
        return (
          <textarea
            name={ name }
            data-testid={ data }
            value={ value }
            onChange={ this.handleChange }
          />
        );
      }

      reset() {
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

        return (
          <form data-testid="add-movie-form">
            <label htmlFor="titulo" data-testid="title-input-label">
              Título
              {this.aInput('text', 'title', 'title-input', title)}
            </label>

            <label htmlFor="subtitulo" data-testid="subtitle-input-label">
              Subtítulo
              {this.aInput('text', 'subtitle', 'subtitle-input', subtitle)}
            </label>

            <label htmlFor="imagePath" data-testid="image-input-label">
              Imagem
              {this.aInput('text', 'imagePath', 'image-input', imagePath)}
            </label>

            <label htmlFor="storyline" data-testid="storyline-input-label">
              Sinopse
              {this.aTextArea('storyline-input', storyline, 'storyline')}
            </label>

            <label htmlFor="rating" data-testid="rating-input-label">
              Avaliação
              {this.aInput('number', 'rating', 'rating-input', rating)}
            </label>

            <label htmlFor="genre" data-testid="genre-input-label">
              Gênero
              <select
                name="genre"
                data-testid="genre-input"
                onChange={ this.handleChange }
                value={ genre }
              >
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
              </select>
            </label>

            <button type="button" onClick={ this.reset } data-testid="send-button">
              Adicionar filme
            </button>
          </form>
        );
      }
}

export default AddMovie;

// AddMovie.propTypes = {
//   aClick: PropTypes.func.isRequired,
// };

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
