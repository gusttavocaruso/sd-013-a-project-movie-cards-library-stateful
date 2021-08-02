// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';

const stateOne = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = stateOne;

    this.handleChange = this.handleChange.bind(this);
    this.inputGenerator = this.inputGenerator.bind(this);
    this.inputRating = this.inputRating.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;

    this.setState({
      [name]: target.value,
    });
  }

  resetState(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateOne);
    console.log(movies);
  }

  inputGenerator(name, value, id, test) {
    return (<input
      name={ name }
      type="text"
      value={ value }
      id={ id }
      data-testid={ test }
      onChange={ this.handleChange }
    />
    );
  }

  textareaGenerator(name, id, test, value) {
    return (
      <textarea
        name={ name }
        id={ id }
        data-testid={ test }
        onChange={ this.handleChange }
        value={ value }
      />
    );
  }

  inputRating(value) {
    return (
      <input
        name="rating"
        type="number"
        onChange={ this.handleChange }
        id="input-number"
        data-testid="rating-input"
        value={ value }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" className="my-form">
        <label htmlFor="input-text2" data-testid="title-input-label">
          Título
          { this.inputGenerator('title', title, 'input-text2', 'title-input') }
        </label>
        <label htmlFor="input-text3" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputGenerator('subtitle', subtitle, 'input-text3', 'subtitle-input')}
        </label>
        <label htmlFor="input-text4" data-testid="image-input-label">
          Imagem
          { this.inputGenerator('imagePath', imagePath, 'input-text4', 'image-input')}
        </label>
        <label htmlFor="textarea" data-testid="storyline-input-label">
          Sinopse
          { this.textareaGenerator('storyline', 'textarea', 'storyline-input', storyline)}
        </label>
        <label htmlFor="input-number" data-testid="rating-input-label">
          Avaliação
          { this.inputRating(rating) }
        </label>
        <label htmlFor="input-option" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="input-option"
            data-testid="genre-input"
            onChange={ this.handleChange }
            value={ genre }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.resetState }
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
