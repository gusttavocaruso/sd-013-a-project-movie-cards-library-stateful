import React from 'react';
import PropTypes from 'prop-types';
import MoviesInput from './MoviesInput';
import NewMoviesInput from './NewMoviesInput';

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

    this.changeStates = this.changeStates.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  changeStates(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  clickButton() {
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
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MoviesInput
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          changeStates={ this.changeStates }
        />
        <NewMoviesInput
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          changeStates={ this.changeStates }
        />
        <button data-testid="send-button" onClick={ this.clickButton } type="button">
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
