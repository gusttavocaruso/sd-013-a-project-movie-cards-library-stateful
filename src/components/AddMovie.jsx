import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputStoryline from './InputStoryline';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  btnOnClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
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
    const {
      subtitle,
      title,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle
          title={ title }
          handleChange={ this.handleChange }
          subtitle={ subtitle }
          imagePath={ imagePath }
        />
        <InputStoryline
          storyLine={ storyLine }
          handleChange={ this.handleChange }
          rating={ rating }
          genre={ genre }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.btnOnClick }
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
