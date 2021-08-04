import React from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryLine from './AddMovieStoryLine';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';

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
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnClick = () => {
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(this.state);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <AddMovieTitle value={ title } onChange={ this.handleChange } />
        <AddMovieSubtitle value={ subtitle } onChange={ this.handleChange } />
        <AddMovieImage value={ imagePath } onChange={ this.handleChange } />
        <AddMovieStoryLine value={ storyline } onChange={ this.handleChange } />
        <AddMovieRating value={ rating } onChange={ this.handleChange } />
        <AddMovieGenre value={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleOnClick }
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
