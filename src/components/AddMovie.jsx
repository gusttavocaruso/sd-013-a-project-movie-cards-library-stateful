import React from 'react';
import PropTypes from 'prop-types';
import AddMovieForm from './AddMovieForm';
import AddMovieForm1 from './AddMovieForm1';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    // this.resetState = this.resetState.bind(this)
    this.state = initialState;
  }

  handleClick = (click) => {
    click(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    const { rating, genre } = this.state;
    const { onClick } = this.props;

    const changeTitle = ({ target }) => {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      });
    };

    return (
      <form data-testid="add-movie-form">
        <AddMovieForm
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          changeTitle={ changeTitle }
        />
        <AddMovieForm1
          changeTitle={ changeTitle }
          genre={ genre }
          rating={ rating }
        />
        <button
          data-testid="send-button"
          type="button"
          onClick={ () => this.handleClick(onClick) }
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
