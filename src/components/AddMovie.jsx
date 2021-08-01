import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTitle from './MovieTitle';
import MovieSubTitle from './MovieSubtitle';
import MovieImagePath from './MovieImagePath';
import MovieSinopse from './MovieSinopse';
import MovieRating from './MovieRating';
import MovieGender from './MovieGender';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieRating: '0',
      movieTitle: '',
      movieSubTitle: '',
      movieImage: '',
      storyline: '',
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (callback) => {
    callback(this.state);
    this.setState({
      movieRating: '0',
      movieTitle: '',
      movieSubTitle: '',
      movieImage: '',
      storyline: '',
      genre: 'action',
    });
  }

  render() {
    const {
      movieRating,
      movieTitle,
      movieSubTitle,
      movieImage,
      storyline,
      genre } = this.state;
    const {
      onClick,
    } = this.props;
    return (
      <div className="movie-add-div">
        <form
          onSubmit={ (event) => { event.preventDefault(); } }
          data-testid="add-movie-form"
          className="movie-add"
        >
          <MovieTitle title={ movieTitle } funcao={ this.handleChange } />
          <MovieSubTitle subtitle={ movieSubTitle } funcao={ this.handleChange } />
          <MovieImagePath imagepath={ movieImage } funcao={ this.handleChange } />
          <MovieSinopse sinopse={ storyline } funcao={ this.handleChange } />
          <MovieRating rating={ movieRating } funcao={ this.handleChange } />
          <MovieGender gender={ genre } funcao={ this.handleChange } />
          <button
            data-testid="send-button"
            type="submit"
            onClick={ () => this.handleClick(onClick) }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
