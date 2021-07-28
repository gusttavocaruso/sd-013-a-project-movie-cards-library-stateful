// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor="input-storyline">
          Storyline:
          <input
            type="text"
            onChange={ this.HandleOnChange }
            name="storyLine"
            id="input-storyline"
          />
        </label>
        <label htmlFor="input-rating">
          Rating:
          <input
            type="number"
            onChange={ this.HandleOnChange }
            name="rating"
            id="input-rating"
          />
        </label>
        <label htmlFor="input-genre">
          <select name="genre" onChange={ this.HandleOnChange } id="input-genre">
            <option value="action">Ação</option>
            <option value="commedy">Comédia</option>
            <option value="thriller">Suspense</option>
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
