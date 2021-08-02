import React from 'react';
import FormAddMovies from './AddMovieForm';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;

    const changeTitle = ({ target }) => {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      });
    };

    return (
      <form data-testid="add-movie-form">
        <FormAddMovies
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          changeTitle={ changeTitle }
        />
        <label data-testid="storyline-input-label" htmlFor="textarea-input">
          Sinopse
          <textarea
            id="textarea-input"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ changeTitle }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="input-number">
          Avaliação
          <input
            id="input-number"
            type="number"
            value={ rating }
            name="rating"
            data-testid="rating-input"
            onChange={ changeTitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
