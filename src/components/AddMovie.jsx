// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputList1 from './InputList1';
import InputList2 from './InputList2';

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
        <InputList1
          title={ title }
          handleChange={ this.handleChange }
          subtitle={ subtitle }
          imagePath={ imagePath }
        />
        <InputList2
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
