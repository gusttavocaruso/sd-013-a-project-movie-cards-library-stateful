import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    const { onSearchTextChange } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" value={ subtitle } data-testid="subtitle-input" />
          </label>
          <label htmlFor="subtitle-input" data-testid="image-input-label">
            Imagem
            <input type="text" value={ imagePath } data-testid="image-input" />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea data-testid="storyline-input" cols="30">{ storyline }</textarea>
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input type="number" value={ rating } data-testid="rating-input" />
          </label>
          <label htmlFor="subtitle-input" data-testid="genre-input-label">
            Gênero
            <select data-testid="genre-input">
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button">Adicionar filme</button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onSearchTextChange: PropTypes.func,
};

AddMovie.defaultProps = { onSearchTextChange: () => {} };

export default AddMovie;
