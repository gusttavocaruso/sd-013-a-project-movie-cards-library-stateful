import React from 'react';
import PropTypes from 'prop-types';
import { formatters } from 'stylelint';

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
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { props: { onClick }, handleChange } = this;

    return (
      <form
        action=""
        data-testid="add-movie-form"
      >
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            value={ title }
            type="text"
            name="title"
            id=""
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            type="text"
            name="subtitle"
            id="subtitle"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            value={ imagePath }
            type="text"
            name="imagePath"
            id="image"
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
