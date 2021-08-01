import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.addInput = this.addInput.bind(this);
    this.addTextArea = this.addTextArea.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChangeText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  addInput(type, name, value, data) {
    return (
      <input
        type={ type }
        name={ name }
        data-testid={ data }
        value={ value }
        onChange={ this.handleChangeText }
      />
    );
  }

  addTextArea(name, value, data) {
    return (
      <textarea
        name={ name }
        data-testid={ data }
        value={ value }
        onChange={ this.handleChangeText }
      />
    );
  }

  render() {
    const { handleChangeText,
      state: { title, subtitle, storyLine, imagePath, rating, genre } } = this;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.addInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.addInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.addInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          { this.addTextArea('storyLine', storyLine, 'storyline-input') }
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.addInput('number', 'rating', rating, 'rating-input') }
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChangeText }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>
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
