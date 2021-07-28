import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    event.preventDefault();
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select data-testid="genre-input" name="genre" value={ genre } onChange={ this.handleChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
