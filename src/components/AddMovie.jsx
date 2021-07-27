import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponents/title';
import Subtitle from './AddMovieComponents/subtitle';
import Image from './AddMovieComponents/image';
import Synopsis from './AddMovieComponents/synopsis';
import Rating from './AddMovieComponents/rating';
import Genre from './AddMovieComponents/genre';

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

    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  // Código copiado da aula anterior ao projeto.
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  clearForm() {
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
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;
    return (
      <form id="test" data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <Image value={ imagePath } handleChange={ this.handleChange } />
        <Synopsis value={ storyline } handleChange={ this.handleChange } />
        <Rating value={ rating } handleChange={ this.handleChange } />
        <Genre value={ genre } handleChange={ this.handleChange } />
        <button type="button" data-testid="send-button" onClick={ this.clearForm }>
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
