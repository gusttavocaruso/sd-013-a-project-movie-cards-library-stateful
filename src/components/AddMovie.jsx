import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  updateState = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.updateState);
    this.setState(initialState);
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={this.state.title}
            onChange={this.updateState}
            data-testid="title-input"
            type="text"
            id="input-title" />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.updateState}
            data-testid="subtitle-input"
            type="text"
            id="input-subtitle" />
        </label>
        <label htmlFor="input-image-path" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.updateState}
            data-testid="image-input"
            type="text"
            id="input-image-path" />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={this.state.storyline}
            onChange={this.updateState}
            data-testid="storyline-input"
            id="sinopse">
          </textarea>
        </label>
        <label htmlFor="stars" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            value={this.state.rating}
            onChange={this.updateState}
            data-testid="rating-input"
            type="number"
            id="stars"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={this.state.genre}
            onChange={this.updateState}
            data-testid="genre-input"
            id="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={this.handleClick} data-testid="send-button">Adicionar filme</button>
      </form>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}

export default AddMovie;
