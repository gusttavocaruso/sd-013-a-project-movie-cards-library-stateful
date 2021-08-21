import PropTypes from 'prop-types';
import React from 'react';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';
import AddImage from './AddImage';
import AddStoryline from './AddStoryline';
import AddRating from './AddRating';

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
  }

  handleChangeText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetButton = (e) => {
    const { addMovie } = this.props;
    e.preventDefault();
    addMovie(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { state } = this;
    return (
      <form data-testid="add-movie-form">
        <AddTitle title={ state.title } handleChangeText={ this.handleChangeText } />
        <AddSubtitle
          subtitle={ state.subtitle }
          handleChangeText={ this.handleChangeText }
        />
        <AddImage
          imagePath={ state.imagePath }
          handleChangeText={ this.handleChangeText }
        />
        <AddStoryline
          storyline={ state.storyline }
          handleChangeText={ this.handleChangeText }
        />
        <AddRating
          rating={ state.rating }
          handleChangeText={ this.handleChangeText }
        />
        <label htmlFor="input-change-genre" data-testid="genre-input-label">
          Gênero
          <select
            type="number"
            name="genre"
            value={ state.genre }
            data-testid="genre-input"
            onChange={ this.handleChangeText }
            id="input-change-genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.resetButton }
          >
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovie;
