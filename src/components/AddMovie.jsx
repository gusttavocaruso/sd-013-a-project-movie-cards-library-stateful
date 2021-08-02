import React from 'react';
import PropTypes from 'prop-types';
import AddMovieGenre from './AddMovieGenre';
import AddMovieImage from './AddMovieImage';
import AddMovieRating from './AddMovieRating';
import AddMovieStoryLine from './AddMovieStoryLine';
import AddMovieSubTitle from './AddMovieSubTitle';
import AddMovieTitle from './AddMovieTitle';

// const inicial = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
//   genre: 'action',
// };
// pq onClick is not a function ?
// como ver o teste do requisito 15?
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

  handleClick = () => {
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
    const { rating, title, subtitle, storyline, imagePath, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle handleChange={ this.handleChange } title={ title } />
        <AddMovieSubTitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <AddMovieImage handleChange={ this.handleChange } imagePath={ imagePath } />
        <AddMovieStoryLine handleChange={ this.handleChange } storyline={ storyline } />
        <AddMovieRating handleChange={ this.handleChange } rating={ rating } />
        <AddMovieGenre handleChange={ this.handleChange } genre={ genre } />
        <button type="submit" onClick={ this.handleClick } data-testid="send-button">
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
