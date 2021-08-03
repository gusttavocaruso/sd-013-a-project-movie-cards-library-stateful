import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './Title';
import SubTitleInput from './Subtitle';
import ImagePathInput from './ImagePath';
import StoryLineInput from './StoryLine';
import RatingInputNumber from './RatingImput';
import GenreInput from './Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleDigit = this.handleDigit.bind(this);
  }

  handleDigit(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleCallback = (callback) => {
    callback(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form
        data-testid="add-movie-form"
        className="addFormContainer"
        onSubmit={ this.handleClick }
      >
        <TitleInput value={ title } onChange={ this.handleDigit } />
        <SubTitleInput value={ subtitle } onChange={ this.handleDigit } />
        <ImagePathInput value={ imagePath } onChange={ this.handleDigit } />
        <StoryLineInput value={ storyline } onChange={ this.handleDigit } />
        <RatingInputNumber value={ rating } onChange={ this.handleDigit } />
        <GenreInput value={ genre } onChange={ this.handleDigit } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ () => this.handleCallback(onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
} // Minha principal dificuldade: Esqueci os ids dos elementos do react e.e

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
