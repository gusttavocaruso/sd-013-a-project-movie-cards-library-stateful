import React from 'react';
import PropTypes from 'prop-types';
import Ima from './Ima';
import Text from './title';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    this.newMovie = this.newMovie.bind(this);
    this.subMovie = this.subMovie.bind(this);
  }

  newMovie(event) {
    const { name, value } = event.target;
    this.setState(({ [name]: value }));
  }

  subMovie(e) {
    const { onClick } = this.props;
    e.preventDefault();
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, storyline, rating, imagePath, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form" onSubmit={ this.subMovie }>
        <Text
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          newMovie={ this.newMovie }
        />
        <Ima
          rating={ rating }
          imagePath={ imagePath }
          newMovie={ this.newMovie }
        />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.newMovie }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func,
};
AddMovie.defaultProps = {
  onClick: {},
};

export default AddMovie;
