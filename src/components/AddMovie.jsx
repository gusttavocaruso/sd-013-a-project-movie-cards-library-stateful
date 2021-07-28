import React from 'react';
import PropTypes from 'prop-types';
import InputTitleAndSubtitle from './InputTitleAndSubtitle';
import InputImageAndStoryline from './InputImageAndStoryline';
import InputRatingAndGenre from './InputRatingAndGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange({ target }) { // desestruturando event.target
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  addMovie() {
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
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form" action="" onSubmit={ this.handleSubmit }>
        <InputTitleAndSubtitle
          title={ title }
          subtitle={ subtitle }
          onChangeFunction={ this.handleChange }
        />
        <InputImageAndStoryline
          imagePath={ imagePath }
          storyline={ storyline }
          onChangeFunction={ this.handleChange }
        />
        <InputRatingAndGenre
          rating={ rating }
          genre={ genre }
          onChangeFunction={ this.handleChange }
        />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.addMovie }
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
