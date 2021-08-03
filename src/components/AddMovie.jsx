// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './AddMovieComponents/AddMovieSubtitle';
import Title from './AddMovieComponents/AddMovieTitle';
import ImagePath from './AddMovieComponents/AddMovieImagePath';
import Storyline from './AddMovieComponents/AddMovieStoryline';
import Rating from './AddMovieComponents/AddMovieRating';
import Genre from './AddMovieComponents/AddMovieGenre';

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
    this.baseState = this.state;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState(
      this.baseState,
    );
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <main>
        <form method="post" data-testid="add-movie-form">
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Title value={ title } onChange={ this.handleChange } />
          <ImagePath value={ imagePath } onChange={ this.handleChange } />
          <Storyline value={ storyline } onChange={ this.handleChange } />
          <Rating value={ rating } onChange={ this.handleChange } />
          <Genre value={ genre } onChange={ this.handleChange } />
          <button data-testid="send-button" type="button" onClick={ this.handleClick }>
            Adicionar filme
          </button>
        </form>
      </main>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
