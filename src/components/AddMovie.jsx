// implement AddMovie component here
import React from 'react';
/* import PropTypes from 'prop-types'; */

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: '',
      genre: '',
    };
  }

HandleOnChange = ((event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
})

// eslint-disable-next-line max-lines-per-function
render() {
  /* const { onClick } = this.props; */
  /* const { title, subtitle, imagePath, storyLine, rating, genre } = this.state; */
  return (
    <div>
      <form data-testid="add-movie-form">
        <label htmlFor="input-tite" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            onChange={ this.HandleOnChange }
            name="title"
            id="input-title"
          />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            onChange={ this.HandleOnChange }
            name="subtitle"
            id="input-subtitle"
          />
        </label>
        <label htmlFor="input-image" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            onChange={ this.HandleOnChange }
            name="imagePath"
            id="input-image"
          />
        </label>
        <label htmlFor="input-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyLine" onChange={ this.HandleOnChange } id="input-storyline" data-testid="storyline-input" cols="30" rows="10" />
        </label>
        <label data-testid="rating-input-label" htmlFor="input-rating">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            onChange={ this.HandleOnChange }
            name="rating"
            id="input-rating"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="input-genre">
          Gênero
          <select data-testid="genre-input" name="genre" onChange={ this.HandleOnChange } id="input-genre">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    </div>
  );
}
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func,
};
 */
export default AddMovie;
