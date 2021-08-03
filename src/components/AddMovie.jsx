import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OneInput from './OneInput';
import SecondInput from './SecondInput';

class AddMovie extends Component {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <div>
          <OneInput
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
          <SecondInput
            storyline={ storyline }
            rating={ rating }
            genre={ genre }
            handleChange={ this.handleChange }
          />
          <button
            data-testid="send-button"
            type="submit"
            id="button-input"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
