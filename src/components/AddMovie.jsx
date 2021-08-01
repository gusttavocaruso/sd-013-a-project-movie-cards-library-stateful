import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from './addMovieComponents/InputLabel';
import InputLabelSelect from './addMovieComponents/InputLabelSelect';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  onClickFunc = () => {
    const { onClick } = this.props;

    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const hand = this.handleChange;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const titleInput = ['text', title, 'title', 'Título', 'title', hand];
    const subtitleInput = ['text', subtitle, 'subtitle', 'Subtítulo', 'subtitle', hand];
    const imageInput = ['text', imagePath, 'imagePath', 'Imagem', 'image', hand];
    const storylineInput = ['text', storyline, 'storyline', 'Sinopse', 'storyline', hand];
    const ratingInput = ['number', rating, 'rating', 'Avaliação', 'rating', hand];
    const genreInput = ['', genre, 'genre', 'Gênero', 'genre', hand];
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <InputLabel
          property={ titleInput }
        />
        <InputLabel
          property={ subtitleInput }
        />
        <InputLabel
          property={ imageInput }
        />
        <InputLabel
          property={ storylineInput }
        />
        <InputLabel
          property={ ratingInput }
        />
        <InputLabelSelect
          property={ genreInput }
        />
        <button
          data-testid="send-button"
          onClick={ this.onClickFunc }
          type="submit"
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
