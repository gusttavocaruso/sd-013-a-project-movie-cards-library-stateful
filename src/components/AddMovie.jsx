// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }

  render() {
    // const { onClick } = this.props;
    // const { subtitle,
    //   title,
    //   imagePath,
    //   storyline,
    //   rating,
    //   genre,
    // } = this.state;

    return (
      <main>
        <form method="post" data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input type="text" id="title" data-testid="title-input" />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" id="subtitle" data-testid="subtitle-input" />
          </label>
          <label htmlFor="image" data-testid="image-input-label">
            Imagem
            <input type="text" id="image" data-testid="image-input" />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea id="storyline" data-testid="storyline-input" cols="30" rows="10" />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input type="number" id="rating" data-testid="rating-input" />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select id="genre" data-testid="genre-input">
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </main>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
