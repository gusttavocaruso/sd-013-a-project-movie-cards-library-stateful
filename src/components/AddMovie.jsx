import React from 'react';
import PropTypes from 'prop-types';
import Extension from './Extension';
import Extension2 from './Extension2';

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

    this.change = this.change.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  change(event) {
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
        <Extension
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          change={ this.change }
        />
        <Extension2
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          change={ this.change }
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
