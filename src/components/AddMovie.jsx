import React from 'react';
// import PropTypes from 'prop-types';
import InputLabel from './addMovieComponents/InputLabel';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputLabel
          type="text"
          value={ title }
          name="title"
          innerLabel="Título"
          dataTestId="title"
          onChange={ this.handleChange }
        />
        <InputLabel
          type="text"
          value={ subtitle }
          name="subtitle"
          innerLabel="Subtítulo"
          dataTestId="subtitle"
          onChange={ this.handleChange }
        />
        <InputLabel
          type="text"
          value={ imagePath }
          name="imagePath"
          innerLabel="Imagem"
          dataTestId="image"
          onChange={ this.handleChange }
        />
        <InputLabel
          type="text"
          value={ storyline }
          name="storyline"
          innerLabel="Sinopse"
          dataTestId="storyline"
          onChange={ this.handleChange }
        />
        <InputLabel
          type="number"
          value={ rating }
          name="rating"
          innerLabel="Avaliação"
          dataTestId="rating"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
