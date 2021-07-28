import React from 'react';
// import PropTypes from 'prop-types';
import InputLabelText from './addMovieComponents/InputLabelText';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
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
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputLabelText
          value={ title }
          name="title"
          innerLabel="Título"
          dataTestId="title"
          onChange={ this.handleChange }
        />
        <InputLabelText
          value={ subtitle }
          name="subtitle"
          innerLabel="Subtítulo"
          dataTestId="subtitle"
          onChange={ this.handleChange }
        />
        <InputLabelText
          value={ imagePath }
          name="imagePath"
          innerLabel="Imagem"
          dataTestId="image"
          onChange={ this.handleChange }
        />
        <InputLabelText
          value={ storyline }
          name="storyline"
          innerLabel="Sinopse"
          dataTestId="storyline"
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
