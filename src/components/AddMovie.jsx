import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.generateInput = this.generateInput.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleBtnClick() {
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

  handleInputs({ target }) {
    const { value, name } = target;

    if (target.parentElement.name === 'genre') {
      this.setState({ genre: value });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  generateInput(name, inputDataTestId, frase, value) {
    return (
      <label htmlFor={ name } data-testid={ `${inputDataTestId}-label` }>
        {frase}
        <input
          type={ (name === 'rating') ? 'number' : 'text' }
          name={ name }
          id={ name }
          value={ value }
          data-testid={ inputDataTestId }
          onChange={ this.handleInputs }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.generateInput(
          'title', 'title-input', 'Título', title,
        )}
        {this.generateInput(
          'subtitle', 'subtitle-input', 'Subtítulo', subtitle,
        )}
        {this.generateInput(
          'imagePath', 'image-input', 'Imagem', imagePath,
        )}
        {this.generateInput(
          'storyline', 'storyline-input', 'Sinopse', storyline,
        )}
        {this.generateInput(
          'rating', 'rating-input', 'Avaliação', rating,
        )}
        <label htmlFor="selectInput" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            id="selectInput"
            value={ genre }
            onChange={ this.handleInputs }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleBtnClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
