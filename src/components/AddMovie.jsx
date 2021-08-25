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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  resetButton = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTitle title={ title } handleChangeText={ this.handleChangeText } />
        <AddSubtitle
          subtitle={ subtitle }
          handleChangeText={ this.handleChangeText }
        />
        <AddImage
          imagePath={ imagePath }
          handleChangeText={ this.handleChangeText }
        />
        <AddStoryline
          storyline={ storyline }
          handleChangeText={ this.handleChangeText }
        />
        <AddRating
          rating={ rating }
          handleChangeText={ this.handleChangeText }
        />
        <label htmlFor="input-change-genre" data-testid="genre-input-label">
          Gênero
          <select
            type="number"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChangeText }
            id="input-change-genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button
            type="submit"
            data-testid="send-button"
            onClick={ (e) => this.resetButton(e) }
          >
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
