import React from 'react';
import PropTypes from 'prop-types';

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
  }

  changeStates(event) {
    const { name, value } = event.target;
    this.setValue({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
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
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            id="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.changeStates }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.changeStates }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            id="image"
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.changeStates }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default AddMovie;
